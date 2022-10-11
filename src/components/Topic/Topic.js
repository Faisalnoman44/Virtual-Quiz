import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { logo, name, id } = topic
    return (
        <div>
            <div className="card w-72 h-80 bg-base-100 shadow-xl rounded-sm m-0">
                <figure className='h-56 p-2'><img className='' src={logo} alt="Shoes" /></figure>
                <div className=" flex justify-between mt-12 px-2">
                    <h2 className="card-title">{name}</h2>
                    <button L className="w-28  bg-blue-400 px-4 font-medium rounded-md "><Link to={`/quiz/${id}`}>Start Qiuz</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;