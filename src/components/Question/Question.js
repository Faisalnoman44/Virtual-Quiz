import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Option from '../Option/Option';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ ques }) => {

    const correctAnswerShow = (answer) =>{
        toast(answer,{
            position: "top-center",
        })
    }

    const { question, options, correctAnswer } = ques;
    // console.log(ques);
    return (
        <div className='mb-7 mt-2 border border-blue-500 w-7/12 mx-auto p-8 rounded-lg bg-slate-300 '>
            <FontAwesomeIcon onClick={()=>correctAnswerShow(correctAnswer)} icon={faEye}></FontAwesomeIcon>
            <h1 className='text-center mb-2 text-xl'>{question.slice(3, -4)}</h1>
            <div className='grid grid-cols-2 text-lg'>
                {
                    options.map((option, index) => <Option
                        key={index}
                        number={ques.id}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;