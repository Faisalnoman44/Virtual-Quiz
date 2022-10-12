import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Option from '../Option/Option';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ ques }) => {
    const { question, options, correctAnswer, id } = ques;

    const handleCheck = value => {
        if (value === correctAnswer) {
            console.log('first')
            toast.success("Your answer is correct", {
                position: "top-center",
            })
        }
        else {
            toast.error("Your answer is wrong", {
                position: "top-center",
            })

        }
        let question = {}
        const storedquizAnswer = localStorage.getItem('stored-answer');
        if (storedquizAnswer) {
            question = JSON.parse(storedquizAnswer);
        }

        const previousAnswer = question[id];
        if (previousAnswer) {
            const newAnswer = value;
            question[id] = newAnswer;
        }
        else {
            question[id] = value;
        }

        question[id] = value
        localStorage.setItem('stored-answer', JSON.stringify(question))
    }

    const correctAnswerShow = (answer) => {
        toast(answer, {
            position: "top-center",
        })
    }

    return (
        <div className='mb-7 mt-2 border border-blue-500 w-7/12 mx-auto p-8 rounded-lg bg-slate-300 '>
            <FontAwesomeIcon onClick={() => correctAnswerShow(correctAnswer)} icon={faEye}></FontAwesomeIcon>
            <h1 className='text-center mb-2 text-xl'>{question.slice(3, -4)}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 text-base md:text-lg'>
                {
                    options.map((option, index) => <Option
                        key={index}
                        number={id}
                        option={option}
                        handleCheck={handleCheck}
                    ></Option>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;