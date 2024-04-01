import EntryCard from "../../components/EntryCard/EntryCard"
import { useState, useEffect } from "react";
import { MDBTypography } from 'mdb-react-ui-kit';
import averageEmotion from '../../utilities/average-emotion'
import convertToEmoji from "../../utilities/num-convert-emotion";
import ReChart from "../../components/ReChart/ReChart";
import './EntryHistoryPage.css';

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
      for (let i = 0; i < 7; i++) {
        const sortedEntries = entries.filter(function (entry) {
          const date = new Date(entry.createdAt);
          const day = date.getDay()
          if (day === i) return entry;
        })
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
  }, [entries])

  return (
    <>
      <h1>Weekly Average {updatedAverageEmotion}</h1>
      <p>Emotions are measured on a scale of 0 - 5</p>
      <div>
        <ReChart entries={entries}/>
        <br />
        <button onClick= {() =>handleDeleteAll(entries)}>Delete All Entries</button>
        <hr />
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Monday {mondayAverage}</h1>
          <div style={monday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {monday.length > 0 ? monday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Tuesday {tuesdayAverage}</h1>
          <div style={tuesday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {tuesday.length > 0 ? tuesday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Wednesday {wednesdayAverage}</h1>
          <div style={wednesday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {wednesday.length > 0 ? wednesday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Thursday {thursdaAverage}</h1>
          <div style={thursday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {thursday.length > 0 ? thursday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Friday {fridayAverage}</h1>
          <div style={friday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {friday.length > 0 ? friday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Saturday {saturdayAverage}</h1>
          <div style={saturday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {saturday.length > 0 ? saturday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Sunday {sundayAverage}</h1>
          <div style={sunday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {sunday.length > 0 ? sunday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
      </div>
    </>
  );
}