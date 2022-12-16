export default function EntryCard({entry}) {
  const date = new Date(entry.createdAt);
  console.log(date.toString().substring(0,2))
  return (
    <div>
      <p>{entry.emotion}{entry.title}</p>
    </div> 
  )
}