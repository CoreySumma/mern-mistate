import { useState } from "react";
import { useParams } from "react-router-dom";



export default function UpdateEntryForm({entries, handleUpdateEntry}) {
  // const {id} = useParams()
  // const updateEntry = entries.find(entry => entry._id === id);
  // const [formData, setFormData] = useState(updateEntry);
  // if (!updateEntry) return null;

  // function handleChange(evt) {
  //   const updatedEntryForm = {...formData, [evt.target.name]:evt.target.value}
  //   setFormData(updatedEntryForm);
  // }

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  //   handleUpdateEntry(formData, id);
  // }

  return (
    <>
    <h1>Second thoughts?</h1>
    <form action="">
      <input type="text" value="" />
      <button type="submit">Save My Changes</button>
    </form>
  </>
  )
}