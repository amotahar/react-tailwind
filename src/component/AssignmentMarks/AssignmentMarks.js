import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const AssignmentMarks = () => {
    const data = [
        {
          name: 'Page A',
          Marks: 4000,
          Quiz: 2400,
          Assignment: 2400,
        },
        {
          name: 'Page B',
          Marks: 3000,
          Quiz: 1398,
          Assignment: 2210,
        },
        {
          name: 'Page C',
          Marks: 2000,
          Quiz: 9800,
          Assignment: 2290,
        },
        {
          name: 'Page D',
          Marks: 2780,
          Quiz: 3908,
          Assignment: 2000,
        },
        {
          name: 'Page E',
          Marks: 1890,
          Quiz: 4800,
          Assignment: 2181,
        },
        {
          name: 'Page F',
          Marks: 2390,
          Quiz: 3800,
          Assignment: 2500,
        },
        {
          name: 'Page G',
          Marks: 3490,
          Quiz: 4300,
          Assignment: 2100,
        },
      ];
    return (
        <div>
          <LineChart width={500} height={400} data={data}>
          <Line type="monotone" dataKey="Marks" stroke="#82ca9d" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          </LineChart>
        </div>
    );
};

export default AssignmentMarks;