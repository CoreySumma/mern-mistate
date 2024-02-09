import { Link } from 'react-router-dom'

export default function EntryCard({ entry }) {

  return (
      <Link to= {`/entries/${entry._id}`}>
    <div>
      <p>{entry.emotion}{entry.title}</p>
    </div>
    </Link>
  )
}