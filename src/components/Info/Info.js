import React from 'react';

const Info = () => {
    return (
        <div className='w-10/12 mx-auto mb-5'>
            <div className="card card-side bg-base-100 shadow-xl h-60 mt-10">
                <figure  className='w-7/12'><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Try the Virtual QUIZ</h2>
                    <p className="text-2xl">Click the button to participate in the quiz</p>
                </div>
            </div>
        </div>
    );
};

export default Info;