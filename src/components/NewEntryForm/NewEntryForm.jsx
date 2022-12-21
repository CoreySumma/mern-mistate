import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBTextArea, MDBCard } from 'mdb-react-ui-kit';
import "./NewEntryForm.css";

export default function NewEntryForm({ addEntry }) {
  const navigate = useNavigate();
  const [entryContent, setEntryContent] = useState({
    title: "",
    text: "",
    emotion: "",
    day: ""
  })

  function handleSubmit(evt) {
    evt.preventDefault();
    addEntry(entryContent);
    setEntryContent({
      title: "",
      text: "",
      emotion: "",
      day: ""
    })
    navigate('/entries')
  }

  function handleChange(evt) {
    setEntryContent({ ...entryContent, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <MDBCard>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            style={{ fontSize: '25px' }}
            name="title"
            value={entryContent.title}
            type="text"
            placeholder="Today I felt...."
            onChange={handleChange}
            required
            pattern=".{1,}"
          />

          <label>Entry For Today:</label>
          <MDBTextArea
            style={{ fontSize: '25px' }}
            columns={40}
            rows={6}
            name="text"
            value={entryContent.text}
            type="text"
            placeholder="What happened?"
            onChange={handleChange}
            required
            pattern=".{1,}"
          />

          <label>Emotion:</label>
          <select name="emotion"
            value={entryContent.emotion}
            onChange={handleChange}
            required
          >
            <option value="">Select One</option>
            <option value="😁">Feelin' Tip Top </option>
            <option value="😊">Good </option>
            <option value="😐">Bleh </option>
            <option value="🙁">Sad </option>
            <option value="😭">Drying My Tears </option>
          </select>
          <button type="submit">LOG MY STATE</button>
        </form>
      </MDBCard>
    </>
  )
}

