import EntryCard from "../../components/EntryCard/EntryCard"

export default function EntryHistoryPage({ entries }) {
 
  
  return (
    <>
      <h1>My Week So Far</h1>
      <div>
      {entries.map((entry, idx) => (
        <EntryCard entry={entry} key={idx} />
      ))}
      </div>
      <br />
      <br />
      <hr />
      <h1>Monday</h1>
      <hr />
      <h1>Tuesday</h1>
      <hr />
      <h1>Wednesday</h1>
      <hr />
      <h1>Thursday</h1>
      <hr />
      <h1>Friday</h1>
      <hr />
      <h1>Saturday</h1>
      <hr />
      <h1>Sunday</h1>
      <hr />
    </>
  );
}