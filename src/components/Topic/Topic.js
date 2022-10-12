import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { logo, name, id, total } = topic
    return (
        <div>
            <div className="card w-72 h-[350px] bg-base-100 shadow-xl rounded-sm m-4 mb-4 p-3">
                <figure className='h-56 p-2'><img className='' src={logo} alt="Shoes" /></figure>
                <div className=" flex justify-between mt-12 px-2">
                    <div className=''>
                        <h2 className="card-title text-blue-500">{name}</h2>
                        <p>Total Quiz:{total}</p>
                    </div>
                    <button L className="w-28 h-10  bg-blue-400 px-4 font-medium rounded-md "><Link to={`/quiz/${id}`}>Start Qiuz</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;