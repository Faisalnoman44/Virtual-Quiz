import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Info from '../Info/Info';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className=' mt-12 mx-auto'>
            <Info></Info>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-16 w-9/12 mx-auto mt-4'>
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