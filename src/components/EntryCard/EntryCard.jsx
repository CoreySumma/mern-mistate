import { Link } from 'react-router-dom'
import './EntryCard.css'

export default function EntryCard({ entry }) {
  return (
      <Link to= {`/entries/${entry._id}`}>
    <div>
      <p className='entry-link'>{entry.emotion}{" "}{entry.title}</p>
    </div>
    </Link>
  )
}