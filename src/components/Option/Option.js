import React from 'react';

const Option = ({option}) => {

    const handleCheck= event =>{
        console.log(event.target.value)
    }

    return (
        <div className='border border-gray-500 p-3 m-1 rounded-md'>
            <input onChange={()=>handleCheck()} type="radio" name="" id="" />{option}
        </div>
    );
};

export default Option;