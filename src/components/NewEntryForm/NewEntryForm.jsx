import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewEntryForm({ addEntry }) {
  const navigate = useNavigate();
  const [entryContent, setEntryContent] = useState({
    title: "",
    text: "",
    emotion: "Feelin' Tip Top 😁",
    day: "Monday"
  })
  
  function handleSubmit(evt) {
    evt.preventDefault();
    addEntry(entryContent);
    setEntryContent({
      title: "",
      text: "",
      emotion: "Feelin' Tip Top 😁",
      day: "Monday"
    })
    navigate('/entries')
  }

  function handleChange(evt) {
  //   setEntryContent([{
  //   title: evt.target.value,
  //   text: evt.target.value, 
  //   emotion: evt.target.value,
  //   day: evt.target.value,
  // }])
  setEntryContent({...entryContent, [evt.target.name]: evt.target.value}) 
 }

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            name="title"
            value={entryContent.title}
            type="text"
            placeholder="Today I felt...."
            onChange={handleChange}
            required
            pattern=".{1,}"
          />

          <label>Content</label>
          <input
            name="text"
            value={entryContent.text}
            type="text"
            placeholder="What happened?"
            onChange={handleChange}
            required
            pattern=".{1,}"
          />

          <label>Emotion</label>
          <select name="emotion"
            value={entryContent.emotion}
            onChange={handleChange}
            required
          >


            <option>Feelin' Tip Top 😁</option>
            <option>Bleh 😐</option>
            <option>Sad 🙁</option>
            <option>Drying My Tears 😭</option>
          </select>

          <label>Day</label>
          <select name="day" value={entryContent.day} onChange={handleChange}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select>
          <button type="submit">LOG MY STATE</button>
        </form>
      </div>
    </>
  )
}

