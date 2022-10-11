import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const loadQuestions = useLoaderData();
    const {name}=loadQuestions.data;
    const questions=loadQuestions.data.questions;
    return (
        <div>
            <h1 className='text-2xl text-center font-semibold text-gray-500'>{name}</h1>
            {
                questions.map(ques =><Question
                key={ques.id}
                ques={ques}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;