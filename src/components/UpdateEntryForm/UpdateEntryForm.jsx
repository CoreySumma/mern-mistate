import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBTextArea, MDBCard } from "mdb-react-ui-kit";
import { useAnimate, stagger } from "framer-motion";
import "./UpdateEntryForm.css";

export default function UpdateEntryForm({ entries, handleUpdateEntry }) {
  const { id } = useParams();
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
    // navigate('/entries');
  }

  useEffect(() => {
    function setEntry() {
      setFormData(updateEntry);
    }
    setEntry();
  }, [updateEntry]);

  // Framer motion functions for hover affects
  const [scope, animate] = useAnimate();
  function handleMouseEnter() {
    // Target each letter of edit and animate them
    animate([[".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }
  function handleMouseLeave() {
    animate([[".letter", { y: 0 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }

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
              <h1 className="title" style={{ color: "white" }}>
                Second thoughts?
              </h1>
              <br />
              <form onSubmit={handleSubmit}>
                <label style={{ fontSize: "25px", color: "white" }}>
                  Updated Entry:
                </label>
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
                  <button
                    className="custom-button"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    type="submit"
                  >
                    <div ref={scope}>
                      <span>
                        {["U", "p", "d", "a", "t", "e"].map((letter, index) => (
                          <span key={`${letter}-${index}`}>
                            <span
                              data-letter={letter}
                              className="letter"
                              key={`${letter}-${index}`}
                            >
                              {letter}
                            </span>
                          </span>
                        ))}
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            </MDBCard>
          </div>
        </>
      )}
    </div>
  );
}
