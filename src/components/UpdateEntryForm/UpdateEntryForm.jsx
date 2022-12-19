import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function UpdateEntryForm({entries, handleUpdateEntry}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const updateEntry = entries.find(entry => entry._id === id);
  const [formData, setFormData] = useState(updateEntry);
  if (!updateEntry) return null;

  function handleChange(evt) {
    const updatedEntryForm = {...updateEntry, [evt.target.name]:evt.target.value}
    setFormData(updatedEntryForm);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateEntry(formData, id);
    navigate('/entries')
  }

  return (
    <>
    <h1>Second thoughts?</h1>
    <form onSubmit={handleSubmit}>
      <input name="text" type="text" value={formData.text} onChange={handleChange}/>
      <button type="submit">Save My Changes</button>
    </form>
  </>
  )
}