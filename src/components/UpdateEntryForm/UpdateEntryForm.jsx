import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBTextArea, MDBCard } from 'mdb-react-ui-kit';

export default function UpdateEntryForm({ entries, handleUpdateEntry, user}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const updateEntry = entries.find(entry => entry._id === id);

  
  const [formData, setFormData] = useState(updateEntry);
  
  console.log(formData);
  console.log(updateEntry)

  function handleChange(evt) {
    const updatedEntryForm = { ...updateEntry, [evt.target.name]: evt.target.value }
    setFormData(updatedEntryForm);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateEntry(formData, id);
    navigate('/entries')
  }

  useEffect(() => {
    function setEntry() {
      setFormData(updateEntry);
    }
    setEntry();
  }, [updateEntry])

  return (
    <div>
     {formData && <>
        <MDBCard>
          <h1>Second thoughts?</h1>
          <form onSubmit={handleSubmit}>
            <label>Updated Entry:</label>
            <MDBTextArea
              name="text"
              type="text"
              rows={4}
              value={formData.text}
              onChange={handleChange} />
            <button type="submit">Save My Changes</button>
          </form>
        </MDBCard>
      </>}
    </div>
  )
}