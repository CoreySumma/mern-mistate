import convertToNumber from "./emotion-convert-num";

export default function averageEmotion(entries) {
  // Default message if no entries were made
  if (!entries.length) return "Make a new entry to see your average!";
  // Calc the average starting with 0
  // Loop through the entries and add the converted number to the total
  const total = entries.reduce((acc, entry) => {
    return acc + convertToNumber(entry.emotion);
  }, 0);
  // Round the total and return it!
  return Math.round(total / entries.length);
}