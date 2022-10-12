import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, correctAnswer, number }) => {


    const handleCheck = value => {
        if (value === correctAnswer) {
            console.log('first')
            toast.success("Your answer is correct",{
                position: "top-center",
            })
            
        }
        else {
            toast.error("Your answer is wrong",{
                position: "top-center",
            })
        }
    }

    return (
        <div className='border border-blue-500 p-3 m-1 rounded-md bg-white '>
                <input className='text-black ans-option' onClick={(event) => handleCheck(event.target.value)} type="radio" name={number} value={option} />{option}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;