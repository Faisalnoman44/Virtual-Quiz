import React from 'react';
import Option from '../Option/Option';

const Question = ({ ques }) => {
    const { question, options } = ques
    return (
        <div className='mb-7 mt-2'>
            <h1 className='text-center mb-2 w-7/12 mx-auto'>{question}</h1>
            <div className='grid grid-cols-2 w-7/12 mx-auto'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Question;