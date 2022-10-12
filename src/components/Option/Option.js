import {ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, handleCheck, number }) => {

    return (
        <div className='border border-blue-500 p-3 m-1 rounded-md bg-white '>
                <input className='text-black ans-option' onClick={(event) => handleCheck(event.target.value)} type="radio" name={number} value={option} />{option}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;