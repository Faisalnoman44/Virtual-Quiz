import React from 'react';
import Option from '../Option/Option';

const Question = ({ ques }) => {

    const { question, options, correctAnswer } = ques;
    console.log(options)
    return (
        <div className='mb-7 mt-2 border border-blue-500 w-7/12 mx-auto p-8 rounded-lg bg-slate-300 '>
            <h1 className='text-center mb-2 text-xl'>{question.slice(3, -4)}</h1>
            <div className='grid grid-cols-2 text-lg'>
                {
                    options.map(option => <Option
                        key={option.idx}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;