import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
import convertToNumber from "../../utilities/emotion-convert-num";

export default function ReChart({ entries }) {
  // console.log(entryConvertToNumber)
  console.log(entries);
  const graphData = [
    { day: "Sunday", emotion: 0, count: 0 },
    { day: "Monday", emotion: 0, count: 0 },
    { day: "Tuesday", emotion: 0, count: 0 },
    { day: "Wednesday", emotion: 0, count: 0 },
    { day: "Thursday", emotion: 0, count: 0 },
    { day: "Friday", emotion: 0, count: 0 },
    { day: "Saturday", emotion: 0, count: 0 },
  ];
  entries?.map((entry) => {
    // Organize the data into an object with the day of the week and the emotion
    if (new Date(entry.createdAt).getDay() === 0) {
      graphData[0].emotion += convertToNumber(entry.emotion);
      graphData[0].count++;
    } else if (new Date(entry.createdAt).getDay() === 1) {
      graphData[1].emotion += convertToNumber(entry.emotion);
      graphData[1].count++;
    } else if (new Date(entry.createdAt).getDay() === 2) {
      graphData[2].emotion += convertToNumber(entry.emotion);
      graphData[2].count++;
    } else if (new Date(entry.createdAt).getDay() === 3) {
      graphData[3].emotion += convertToNumber(entry.emotion);
      graphData[3].count++;
    } else if (new Date(entry.createdAt).getDay() === 4) {
      graphData[4].emotion += convertToNumber(entry.emotion);
      graphData[4].count++;
    } else if (new Date(entry.createdAt).getDay() === 5) {
      graphData[5].emotion += convertToNumber(entry.emotion);
      graphData[5].count++;
    } else if (new Date(entry.createdAt).getDay() === 6) {
      graphData[6].emotion += convertToNumber(entry.emotion);
      graphData[6].count++;
    }
    console.log(graphData);
    return {
      graphData,
    };
  });
  // Calculate the average emotion for each day of the week
  graphData.forEach((data) => {
    data.emotion = data.emotion / data.count;
  });
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={graphData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis dataKey="emotion" tickCount={6} ticks={[0, 1, 2, 3, 4, 5]} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="emotion"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
