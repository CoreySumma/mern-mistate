import EntryCard from "../../components/EntryCard/EntryCard"
import { useState, useEffect } from "react";
import { MDBTypography } from 'mdb-react-ui-kit';

export default function EntryHistoryPage({ entries, handleDeleteAll }) {


  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

  useEffect(() => {
    function sortEntries() {
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
    }
    sortEntries();
  }, [entries])

  return (
    <>
      <h1>Your Week So Far...</h1>
      <p>(You can choose to delete old entries, OR keep them as a reference for trends.)</p>
      <div>
        <img src="/assets/stocks.png" />
        <br />
        <button onClick={handleDeleteAll}>Let's start fresh!</button>
         <p>(This button WILL delete all entries.)</p>
        <hr />
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Monday</h1>
          <div style={monday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {monday.length > 0 ? monday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Tuesday</h1>
          <div style={tuesday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {tuesday.length > 0 ? tuesday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Wednesday</h1>
          <div style={wednesday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {wednesday.length > 0 ? wednesday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Thursday</h1>
          <div style={thursday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {thursday.length > 0 ? thursday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Friday</h1>
          <div style={friday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {friday.length > 0 ? friday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Saturday</h1>
          <div style={saturday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {saturday.length > 0 ? saturday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
        <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
          <h1>Sunday</h1>
          <div style={sunday.length > 0 ? { border: "1px solid rgb(220, 219, 220)" } : null} />
          {sunday.length > 0 ? sunday.map((entry, idx) => (<EntryCard entry={entry} key={idx} />)) : <h1>No Entry For This Day</h1>}
        </MDBTypography>
      </div>
    </>
  );
}