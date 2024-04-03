import { useParams, useNavigate } from "react-router-dom";
import { MDBTypography } from "mdb-react-ui-kit";

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

  return (
    <div className="page-container">
      {entry && (
        <>
          <MDBTypography
            tag="div"
            className="display-6 pb-3 mb-3 border-bottom"
          >
            {/* <div>{entry.emotion}</div> */}
            <div className="title">
              <em>{entry.title}</em>
            </div>
            <br />
            <p>{new Date(entry.updatedAt).toLocaleDateString()}{' @ '}{time}</p>
          </MDBTypography>
          <MDBTypography
            tag="div"
            className="display-7 pb-3 mb-10 border-bottom"
          >
            <div>{entry.text}</div>
          </MDBTypography>
          <button onClick={() => navigate(`/entries/${entry._id}/update`)}>
            Edit This Entry
          </button>
          <button onClick={() => handleDelete(entry._id)}>
            Delete This Entry
          </button>
        </>
      )}
    </div>
  );
}
