import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div className='w-10/12 mx-auto mb-5'>
            <div className="card card-side bg-base-100 shadow-xl h-96 mt-10 grid grid-cols-1 md:grid-cols-2">
                <figure className='md:full '><img className='h-56 md:h-full ' src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/6/5/5/509655_shutterstock_1506580442_769367.jpg" alt="Movie" /></figure>
                <div className="card-body flex justify-center pb-10 items-center ">
                    <div>
                        <h2 className="card-title text-2xl md:text-4xl">Try the Virtual QUIZ</h2>
                        <p className="md:text-2xl">Click the button to participate in the quiz</p>
                    </div>
                </div>
            </div>

            <h3 className='text-2xl md:text-5xl text-center mt-10'>To Participate in the quiz</h3>
            <div className='text-center mt-5'>
                <button className='text-center  bg-blue-600 p-4 rounded-lg text-white font-semibold'><Link to='/topics'>Click Here</Link></button>
            </div>
        </div>
    );
};

export default Info;