import { useParams } from "react-router-dom"

export default function EntryDetailPage({entries, handleDelete}) {
  const { entryName } = useParams();
  const entry = entries.find((entry) => entry.title === entryName);
  let date = new Date(entry.createdAt);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}
  return (
    <>
    <div>{date.toLocaleDateString(dateOptions)}</div>
    <div>{entry.text}</div>
    <button onClick={() => handleDelete(entry._id)}>Delete This Day</button>
    </>
  )
}
