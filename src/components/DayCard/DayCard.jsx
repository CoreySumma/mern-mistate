import React, { useState } from "react";
import "./DayCard.css";
import EntryCard from "../EntryCard/EntryCard";
import { motion, AnimatePresence } from "framer-motion";

export default function DayCard({ day, entries, averageEmotion = '😶' }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Animation variants for the DayCard
  const cardVariants = {
    collapsed: { opacity: 0.8, height: 100 },
    expanded: { opacity: 1, height: "auto" },
  };

  // Animation variants for the entries inside the DayCard
  const entriesVariants = {
    start: { opacity: 0 },
    end: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.div
      layout
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={cardVariants}
      className="day-card"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.h1 className="day-card-title" layout>{day}{' '}{averageEmotion} <hr /></motion.h1>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={entriesVariants}
            initial="start"
            animate="end"
            exit="start"
            layout
          >
            {entries.length > 0 ? (
              entries.map(entry => (
              <motion.div key={entry._id} layout>
                <EntryCard entry={entry} />
              </motion.div>
              ))
              ) : (
              <motion.div className="empty-link" layout>No entries for this day.</motion.div> 
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
