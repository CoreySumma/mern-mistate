import { useParams, useNavigate } from "react-router-dom";
import { MDBTypography } from "mdb-react-ui-kit";
import { useAnimate, stagger } from "framer-motion";
import "./EntryDetailPage.css";

export default function EntryDetailPage({ entries, handleDelete }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const entry = entries.find((entry) => entry._id === id);

  // Get Entry day of the week
  const date = new Date(entry.createdAt);
  const day = date.getDay();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = dayOfWeek[day];

  // Get the time if entry as 11:59pm etc
  const time = new Date(entry.createdAt).toLocaleTimeString();
  // Framer motion logic. We destructure values from useAnimate and save them in scope and animate.
  const [scope1, animate1] = useAnimate();
  const [scope2, animate2] = useAnimate();

  // Function to handle the mouse enter event
  function handleMouseEnter1() {
  // Target each letter of edit and animate them
    animate1([['.letter-edit', { y: -32 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }
  function handleMouseLeave1() {
    animate1([['.letter-edit', { y: 0 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }
  // Function to handle the mouse enter event
  function handleMouseEnter2() {
    // Target each letter of edit and animate them
    animate2([['.letter-delete', { y: -32 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }
  function handleMouseLeave2() {
    animate2([['.letter-delete', { y: 0 }, { duration: 0.2, delay: stagger(0.1) }]]);
  }

  return (
    <div className="page-container">
      {entry && (
        <>
          <MDBTypography
            tag="div"
            className="display-6 pb-3 mb-3 border-bottom"
          >
            <div className="title">
              <em>{entry.title}</em>
            </div>
            <br />
            <p>
              {dayName}
              {"("}
              {new Date(entry.updatedAt).toLocaleDateString()}
              {")"}
              {" @ "}
              {time}
            </p>
          </MDBTypography>
          <MDBTypography
            tag="div"
            className="display-7 pb-3 mb-10 border-bottom"
          >
            <div>{entry.text}</div>
          </MDBTypography>
          <div className="button-container">
            <div className="multiple-button-container">
              <button
                className="custom-button"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                onClick={() => navigate(`/entries/${entry._id}/update`)}
              >
                <div ref={scope1}>
                  <span>
                    {["E", "d", "i", "t"].map((letter, index) => (
                      <span key={`${letter}-${index}`}>
                        <span
                          data-letter={letter}
                          className="letter-edit"
                          key={`${letter}-${index}`}
                        >
                          {letter}
                        </span>
                      </span>
                    ))}
                  </span>
                </div>
              </button>
              <button
                className="custom-button"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={() => handleDelete(entry._id)}
              >
                <div ref={scope2}>
                  <span>
                    {["D", "e", "l", "e", "t", "e"].map((letter, index) => (
                      <span key={`${letter}-${index}`}>
                        <span
                          data-letter={letter}
                          className="letter-delete"
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
          </div>
        </>
      )}
    </div>
  );
}
