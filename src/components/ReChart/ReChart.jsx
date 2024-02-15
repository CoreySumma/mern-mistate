// The user logs their journal entry for a day and chooses an emoji that
// represents how they feel.
// This is a component that imports my utility function that switches the emoji to a number (0-5)
// and then calculates the average emotion the user feels based on the day
// of the week they made an entry.
// Using Rechart library, I create a line chart that displays the average emotion for each day 
// of the week.

// Import Line chart from Rechart library
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
// Import the function to convert the emotion emoji to a number
// I will use the number to calculate the average emotion 
// the user feels for each day of the week
import convertToNumber from "../../utilities/emotion-convert-num";

export default function ReChart({ entries }) {
// Create an array of objects with the days of the week and the emotion
// and the count of entries for each day.
// This will hold our data for the line chart and be user 
// to calculate the average emotion of the user for each day they make
// an entry.
  const graphData = [
    { day: "Sunday", emotion: 0, count: 0 },
    { day: "Monday", emotion: 0, count: 0 },
    { day: "Tuesday", emotion: 0, count: 0 },
    { day: "Wednesday", emotion: 0, count: 0 },
    { day: "Thursday", emotion: 0, count: 0 },
    { day: "Friday", emotion: 0, count: 0 },
    { day: "Saturday", emotion: 0, count: 0 },
  ];
  // If entries exists --> Map through the entries 
  entries?.map((entry) => {
    // I organize the data into our grpahData object I made with the 
    // day of the week and the emotion.
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
    return {
      graphData,
    };
  });
  // Calculate the average emotion for each day of the week using
  // a forEach loop.
  graphData.forEach((data) => {
    // Get the average emotion for each day of the week by dividing the
    // total emotion by the count of entries for each day.
    data.emotion = data.emotion / data.count;
  });
  return (
    // Use ReChart to create a line chart with the graphData object I made.
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
