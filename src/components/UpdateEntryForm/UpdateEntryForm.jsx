import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MDBTextArea, MDBCard } from "mdb-react-ui-kit";
import "./UpdateEntryForm.css";

export default function UpdateEntryForm({ entries, handleUpdateEntry, user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const updateEntry = entries.find((entry) => entry._id === id);
  const [formData, setFormData] = useState(updateEntry);

  function handleChange(evt) {
    const updatedEntryForm = {
      ...updateEntry,
      [evt.target.name]: evt.target.value,
    };
    setFormData(updatedEntryForm);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateEntry(formData, id);
    navigate("/entries");
  }

  useEffect(() => {
    function setEntry() {
      setFormData(updateEntry);
    }
    setEntry();
  }, [updateEntry]);

  return (
    <div className="page-container">
      {formData && (
        <>
          <div className="form-container">
            <MDBCard
              style={{
                backgroundColor: "rgba(255, 255, 255, 0)",
                border: "none",
                boxShadow: "none",
                width: "85%",
              }}
            >
              <h1 className="title" style={{color: "white"}}>Second thoughts?</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <label style={{ fontSize: "25px", color: "white" }}>Updated Entry:</label>
                <MDBTextArea
                  style={{ fontSize: "25px", backgroundColor: "white" }}
                  columns={40}
                  rows={6}
                  name="text"
                  type="text"
                  value={formData.text}
                  onChange={handleChange}
                />
                <div className="button-container">
                  <button type="submit">Update</button>
                </div>
              </form>
            </MDBCard>
          </div>
        </>
      )}
    </div>
  );
}
