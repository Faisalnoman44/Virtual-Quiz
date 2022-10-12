
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const Statistics = () => {
    const loadData = useLoaderData();
    const data = loadData.data
    console.log(data)
    return (
        <div className='w-[70%] h-[400px] mx-auto' >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={300} data={data} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};
export default Statistics;