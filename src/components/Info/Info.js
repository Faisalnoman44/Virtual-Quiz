import React from 'react';

const Info = () => {
    return (
        <div className='w-10/12 mx-auto mb-5'>
            <div className="card card-side bg-base-100 shadow-xl h-60 mt-10">
                <figure  className='w-8/12 '><img className='h-full' src="https://d1ymz67w5raq8g.cloudfront.net/Pictures/480xany/6/5/5/509655_shutterstock_1506580442_769367.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title md:text-4xl">Try the Virtual QUIZ</h2>
                    <p className="md:text-2xl">Click the button to participate in the quiz</p>
                </div>
            </div>
        </div>
    );
};

export default Info;