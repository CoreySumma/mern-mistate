import "./ReChart.css";
import { useState } from "react";
// Import Line chart from Rechart library
import {
  LineChart,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React, { useEffect } from "react";
// Import the function to convert the emoji to a number
// I will use the number to calculate the average emotion
// the user feels for each day of the week.
import convertToNumber from "../../utilities/emotion-convert-num";
export default function ReChartMobile({ entries }) {
  // Create an array of objects with the days of the week, the emotion(converted to a number),
  // and the count of entries for each day.
  // This will hold our data for the line chart and be used
  // to calculate the average emotion of the user for each day they make
  // an entry.
  const graphData = [
    { day: "Sun", emotion: 0, count: 0 },
    { day: "Mon", emotion: 0, count: 0 },
    { day: "Tues", emotion: 0, count: 0 },
    { day: "Wed", emotion: 0, count: 0 },
    { day: "Thurs", emotion: 0, count: 0 },
    { day: "Fri", emotion: 0, count: 0 },
    { day: "Sat", emotion: 0, count: 0 },
  ];
  // If entries exists --> Loop through the entries
  entries?.forEach((entry) => {
    // I organize the data into the graphData array I made with the
    // day of the week and the emotion and update the values accordingly.
    // I add to the count of entries for each day so I can average it later.
    // This line new Date(entry.createdAt).getDay() returns the day
    // of the week - 0 being Sunday, and 6 being Saturday.
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
  });
  // Calculate the average emotion for each day of the week using
  // a forEach loop after the first loop finishes.
  graphData.forEach((data) => {
    // Get the average emotion for each day of the week by dividing the
    // total emotion(now a totaled number) by the count of entries for each day.
    data.emotion = data.emotion / data.count;
  });

  // Custom function so we can display our emojis on the Y-axis
  // const CustomYAxisTick = ({ x, y, payload }) => {
  //   const emoji = convertToEmoji(payload.value); // Convert numerical value to emoji
  //   return (
  //     <g transform={`translate(${x},${y})`}>
  //       <text x={0} y={0} dy={16}>
  //         {emoji}
  //       </text>
  //     </g>
  //   );
  // }
  return (
    <div className="chart-container">
      {/* Use ReChart to create a line chart with the graphData object I made. */}
      <ResponsiveContainer width="100%" height={300} style={{}}>
        <LineChart
          data={graphData}
          margin={{ top: 5, right: 26, left: -25, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" strokeWidth={2} />
          <XAxis
            dataKey="day"
            interval={0}
            axisLine={{ stroke: "#ccc", strokeWidth: 3 }}
            tickLine={{ stroke: "#ccc", strokeWidth: 3 }}
          />
          <YAxis
            tickCount={6}
            ticks={[0, 1, 2, 3, 4, 5]}
            axisLine={{ stroke: "#ccc", strokeWidth: 3 }}
            tickLine={{ stroke: "#ccc", strokeWidth: 3 }}
          />
          <Tooltip contentStyle={{ fontSize: "1rem" }} />
          <Legend wrapperStyle={{ fontSize: "1rem" }} />
          <Line
            type="monotone"
            dataKey="emotion"
            name="Emotion"
            stroke="#8884d8"
            strokeWidth={4}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
