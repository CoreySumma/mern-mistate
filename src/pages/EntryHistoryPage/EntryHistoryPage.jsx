import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import averageEmotion from "../../utilities/average-emotion";
import convertToEmoji from "../../utilities/num-convert-emotion";
import ReChart from "../../components/ReChart/ReChart";
import "./EntryHistoryPage.css";
import DayCard from "../../components/DayCard/DayCard";

export default function EntryHistoryPage({ entries, handleDeleteAll }) {
  // State for each entry for each day of the week
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  // State for the average emotion for each day of the week
  const [mondayAverage, setMondayAverage] = useState([]);
  const [tuesdayAverage, setTuesdayAverage] = useState([]);
  const [wednesdayAverage, setWednesdayAverage] = useState([]);
  const [thursdaAverage, setThursdayAverage] = useState([]);
  const [fridayAverage, setFridayAverage] = useState([]);
  const [saturdayAverage, setSaturdayAverage] = useState([]);
  const [sundayAverage, setSundayAverage] = useState([]);

  const [updatedAverageEmotion, setUpdatedAverageEmotion] = useState([]);

  // Sort and average the entries
  useEffect(() => {
    function sortAndAverageEntries() {
      setUpdatedAverageEmotion(convertToEmoji(averageEmotion(entries)));
      console.log(entries);
      for (let i = 0; i < 7; i++) {
        const sortedEntries = entries.filter(function (entry) {
          const date = new Date(entry.createdAt);
          const day = date.getDay();
          if (day === i) return entry;
        });
        if (i === 0) setSunday(sortedEntries);
        if (i === 1) setMonday(sortedEntries);
        if (i === 2) setTuesday(sortedEntries);
        if (i === 3) setWednesday(sortedEntries);
        if (i === 4) setThursday(sortedEntries);
        if (i === 5) setFriday(sortedEntries);
        if (i === 6) setSaturday(sortedEntries);
      }
      setMondayAverage(convertToEmoji(averageEmotion(monday)));
      setTuesdayAverage(convertToEmoji(averageEmotion(tuesday)));
      setWednesdayAverage(convertToEmoji(averageEmotion(wednesday)));
      setThursdayAverage(convertToEmoji(averageEmotion(thursday)));
      setFridayAverage(convertToEmoji(averageEmotion(friday)));
      setSaturdayAverage(convertToEmoji(averageEmotion(saturday)));
      setSundayAverage(convertToEmoji(averageEmotion(sunday)));
    }
    sortAndAverageEntries();
  }, [entries]);

  // Framer motion functions for hover affects
  const [scope, animate] = useAnimate();
  function handleMouseEnter() {
    // Target each letter of edit and animate them
    animate([[".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }
  function handleMouseLeave() {
    animate([[".letter", { y: 0 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }

  return (
    <>
      <div className="background">
        <h1 className="title">Weekly Average {updatedAverageEmotion}</h1>
        <p>Emotions are measured on a scale of 0 - 5</p>
        <ReChart entries={entries} />
        <br />
        <hr />
        {/* <div className="days-container"> */}
        <DayCard
          day="Monday"
          entries={monday}
          averageEmotion={convertToEmoji(averageEmotion(monday))}
        />
        <hr />
        <DayCard
          day="Tuesday"
          entries={tuesday}
          averageEmotion={convertToEmoji(averageEmotion(tuesday))}
        />
        <hr />
        <DayCard
          day="Wednesday"
          entries={wednesday}
          averageEmotion={convertToEmoji(averageEmotion(wednesday))}
        />
        <hr />
        <DayCard
          day="Thursday"
          entries={thursday}
          averageEmotion={convertToEmoji(averageEmotion(thursday))}
        />
        <hr />
        <DayCard
          day="Friday"
          entries={friday}
          averageEmotion={convertToEmoji(averageEmotion(friday))}
        />
        <hr />
        <DayCard
          day="Saturday"
          entries={saturday}
          averageEmotion={convertToEmoji(averageEmotion(saturday))}
        />
        <hr />
        <DayCard
          day="Sunday"
          entries={sunday}
          averageEmotion={convertToEmoji(averageEmotion(sunday))}
        />
        <hr />
        <button
          className="custom-button"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDeleteAll(entries)}
        >
          <div ref={scope}>
            <span>
              {["C", "l", "e", "a", "r", "\u00A0", "A", "l", "l"].map((letter, index) => (
                <span key={`${letter}-${index}`}>
                  <span
                    data-letter={letter}
                    className="letter"
                    key={`${letter}-${index}`}
                  >
                    {letter}
                  </span>
                </span>
              ))}
            </span>
          </div>
        </button>
      </div>
    </>
  );
}
