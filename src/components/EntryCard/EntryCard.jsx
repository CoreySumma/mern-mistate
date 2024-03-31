import { Link } from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import './EntryCard.css'

export default function EntryCard({ entry }) {
  const [selectedId, setSelectedId] = useState(null)
  return (
      <Link to= {`/entries/${entry._id}`}>
    <div>
      <p className='entry-link'>{entry.emotion}{" "}{entry.title}</p>
    </div>
    </Link>
  )
}