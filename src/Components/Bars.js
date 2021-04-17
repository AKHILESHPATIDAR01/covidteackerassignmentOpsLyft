import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


function Bars( {data} ) {
    return (
        <div>
            <div className='main_container'>
                <p>Toll Summary</p>
                <div>
                    <BarChart
                    width={1000}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="uv" stackId="a" fill="#ffc658" />
                    </BarChart>

                </div>
            </div>
        </div>
    )
}

export default Bars