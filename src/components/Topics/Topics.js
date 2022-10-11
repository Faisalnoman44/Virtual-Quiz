import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Info from '../Info/Info';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className=' mt-12'>
            <Info></Info>
            <div className='grid grid-cols-4 gap-16 w-9/12 mx-auto mt-4'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;