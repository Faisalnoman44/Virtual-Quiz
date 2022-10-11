import React, { useState } from 'react';

const Option = ({option, correctAnswer}) => {
    

    const handleCheck= value =>{
        if(value === correctAnswer){
            console.log('right');
        }
        else{
            console.log('wrong')
        }
        

    }

    return (
        <div className='border border-blue-500 p-3 m-1 rounded-md bg-white '>
            <input className='text-black ans-option' onChange={(event)=>handleCheck(event.target.value)} type="radio" name="ans" value={option} />{option}
        </div>
    );
};

export default Option;