import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function EntryDetailPage({entries, handleDelete}) {
  const navigate = useNavigate();
  const { entryName } = useParams();
  const entry = entries.find((entry) => entry.title === entryName);
  let date = new Date(entry.createdAt);
  const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}
  return (
    <>
    <div>{date.toLocaleDateString(dateOptions)}</div>
    <div>{entry.text}</div>
    <button onClick={() => handleDelete(entry._id)}>Delete This Entry</button>
    <button onClick={() => navigate(`/entries/${entry._id}/update`)}>Edit This Entry</button>
    </>
  )
}
