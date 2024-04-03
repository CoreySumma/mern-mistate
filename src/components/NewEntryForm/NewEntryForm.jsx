import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBTextArea, MDBCard } from "mdb-react-ui-kit";
import "./NewEntryForm.css";

export default function NewEntryForm({ addEntry }) {
  const navigate = useNavigate();
  const [entryContent, setEntryContent] = useState({
    title: "",
    text: "",
    emotion: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    addEntry(entryContent);
    setEntryContent({
      title: "",
      text: "",
      emotion: "",
    });
    navigate("/entries");
  }

  function handleChange(evt) {
    setEntryContent({ ...entryContent, [evt.target.name]: evt.target.value });
  }

  return (
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
          <form onSubmit={handleSubmit}>
            <label style={{ fontSize: "25px", color: "white"}}>Title:</label>
            <input
              style={{ fontSize: "25px" }}
              name="title"
              value={entryContent.title}
              type="text"
              placeholder="Today I felt...."
              onChange={handleChange}
              required
              pattern=".{1,}"
            />

            <label style={{ fontSize: "25px", color: "white"}}>Entry For Today:</label>
            <MDBTextArea
              style={{ fontSize: "25px", backgroundColor: "white" }}
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

            <label style={{fontSize: "25px", color: "white" }}>Emotion:</label>
            <select
              name="emotion"
              value={entryContent.emotion}
              onChange={handleChange}
              required
            >
              <option style={{ fontSize: "25px" }} value="">
                Select One
              </option>
              <option style={{ fontSize: "25px" }} value="😁">
                Feelin' Tip Top{" "}
              </option>
              <option style={{ fontSize: "25px" }} value="😊">
                Good{" "}
              </option>
              <option style={{ fontSize: "25px" }} value="😐">
                Bleh{" "}
              </option>
              <option style={{ fontSize: "25px" }} value="🙁">
                Sad{" "}
              </option>
              <option style={{ fontSize: "25px" }} value="😭">
                Drying My Tears{" "}
              </option>
            </select>
            <div className="button-container">
              <button type="submit">Write To Journal</button>
            </div>
          </form>
        </MDBCard>
      </div>
    </>
  );
}
