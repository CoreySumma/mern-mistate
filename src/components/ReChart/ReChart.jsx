import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';
import convertToNumber from '../../utilities/emotion-convert-num';

export default function ReChart({entries}) {
  // console.log(entryConvertToNumber)
  console.log(entries);
  const entryConvertToNumber = entries?.map((entry) => {
    // const dayOfWeek = new Date(entry.createdAt).toLocaleDateString('en-US', { weekday: 'long' });
    return {
      emotion: convertToNumber(entry.emotion),
      date: new Date(entry.createdAt).toLocaleDateString('en-US', { weekday: 'long' }),
    }
  })
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={entryConvertToNumber}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="emotion"/>
        <Tooltip />
        <Line type="monotone" dataKey="emotion" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}