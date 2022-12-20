import { Link } from 'react-router-dom'

export default function EntryCard({ entry }) {

  const days = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  }

  return (
      <Link to= {`/entries/${entry._id}`}>
    <div>
      <p>{entry.emotion}{entry.title}</p>
    </div>
    </Link>
  )
}