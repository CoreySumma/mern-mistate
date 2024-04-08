
// Import Line chart from Rechart library
import {
  LineChart,
  Line,
  XAxis,
  YAxis, 
  Legend,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import React from "react";
// Import the function to convert the emoji to a number
// I will use the number to calculate the average emotion 
// the user feels for each day of the week.
import convertToNumber from "../../utilities/emotion-convert-num";

export default function ReChart({ entries, allUserEntries }) {
// Create an array of objects with the days of the week, the emotion(converted to a number),
// and the count of entries for each day.
// This will hold our data for the line chart and be used 
// to calculate the average emotion of the user for each day they make
// an entry.
  const graphData = [
    { day: "Sunday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
    { day: "Monday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
    { day: "Tuesday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
    { day: "Wednesday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
    { day: "Thursday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
    { day: "Friday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
    { day: "Saturday", userEmotion: 0, userCount: 0, allEmotions: 0, allCount: 0 },
  ];
  // If entries exists --> Loop through the entries 
  entries?.forEach((entry) => {
    // I organize the data into the graphData array I made with the 
    // day of the week and the emotion and update the values accordingly.
    // I add to the count of entries for each day so I can average it later.
    // This line new Date(entry.createdAt).getDay() returns the day 
    // of the week - 0 being Sunday, and 6 being Saturday.
    if (new Date(entry.createdAt).getDay() === 0) {
      graphData[0].userEmotion += convertToNumber(entry.emotion);
      graphData[0].userCount++;
    } else if (new Date(entry.createdAt).getDay() === 1) {
      graphData[1].userEmotion += convertToNumber(entry.emotion);
      graphData[1].userCount++;
    } else if (new Date(entry.createdAt).getDay() === 2) {
      graphData[2].userEmotion += convertToNumber(entry.emotion);
      graphData[2].userCount++;
    } else if (new Date(entry.createdAt).getDay() === 3) {
      graphData[3].userEmotion += convertToNumber(entry.emotion);
      graphData[3].userCount++;
    } else if (new Date(entry.createdAt).getDay() === 4) {
      graphData[4].userEmotion += convertToNumber(entry.emotion);
      graphData[4].userCount++;
    } else if (new Date(entry.createdAt).getDay() === 5) {
      graphData[5].userEmotion += convertToNumber(entry.emotion);
      graphData[5].userCount++;
    } else if (new Date(entry.createdAt).getDay() === 6) {
      graphData[6].userEmotion += convertToNumber(entry.emotion);
      graphData[6].userCount++;
    }
  });
  // If allUserEntries exists --> Loop through the entries 
  allUserEntries?.forEach((entry) => {
  // Same as above loop but for all users
    if (new Date(entry.createdAt).getDay() === 0) {
      graphData[0].allEmotions += convertToNumber(entry.emotion);
      graphData[0].allCount++;
    } else if (new Date(entry.createdAt).getDay() === 1) {
      graphData[1].allEmotions += convertToNumber(entry.emotion);
      graphData[1].allCount++;
    } else if (new Date(entry.createdAt).getDay() === 2) {
      graphData[2].allEmotions += convertToNumber(entry.emotion);
      graphData[2].allCount++;
    } else if (new Date(entry.createdAt).getDay() === 3) {
      graphData[3].allEmotions += convertToNumber(entry.emotion);
      graphData[3].allCount++;
    } else if (new Date(entry.createdAt).getDay() === 4) {
      graphData[4].allEmotions += convertToNumber(entry.emotion);
      graphData[4].allCount++;
    } else if (new Date(entry.createdAt).getDay() === 5) {
      graphData[5].allEmotions += convertToNumber(entry.emotion);
      graphData[5].allCount++;
    } else if (new Date(entry.createdAt).getDay() === 6) {
      graphData[6].allEmotions += convertToNumber(entry.emotion);
      graphData[6].allCount++;
    }
  });
  // Calculate the average emotion for each day of the week using
  // a forEach loop after the first loop finishes.
  graphData.forEach((data) => {
    // Get the average emotion for each day of the week by dividing the
    // total emotion(now a totaled number) by the count of entries for each day.
    // Changing our count in the array to reflect the average for each day
    data.userEmotion = data.userEmotion / data.userCount;
    data.allEmotions = data.allEmotions / data.allCount;
  });
  return (
    <div className="chart-container">
    {/* Use ReChart to create a line chart with the graphData object I made. */}
    <ResponsiveContainer width="100%" height={400} style={{}}>
      <LineChart
        data={graphData}
        margin={{
          top: 10,
          right: 100,
          left: 40,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day"  axisLine={{ stroke: "#ccc", strokeWidth: 5 }} tickLine={{ stroke: "#ccc", strokeWidth: 5 }}/>
        <YAxis dataKey="emotion" tickCount={6} ticks={[0, 1, 2, 3, 4, 5]} axisLine={{ stroke: "#ccc", strokeWidth: 5 }} tickLine={{ stroke: "#ccc", strokeWidth: 5 }}/>
        <Tooltip contentStyle={{ fontSize: '1rem' }}/>
        <Legend wrapperStyle={{ fontSize: '2rem' }} />
        <Line
          type="monotone"
          dataKey="userEmotion"
          name="Your Emotion"
          stroke="#8884d8"
          strokeWidth={4}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="allEmotions"
          name="Other's Emotion"
          stroke="#82ca9d"
          strokeWidth={4}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}
