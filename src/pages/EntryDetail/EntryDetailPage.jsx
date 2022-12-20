import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { MDBTypography } from 'mdb-react-ui-kit';

export default function EntryDetailPage({ entries, handleDelete }) {
  const navigate = useNavigate();
  const { entryName } = useParams();
  const entry = entries.find((entry) => entry.title === entryName);
  let date = new Date(entry.createdAt);
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
  return (
    <>
      <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
        <div>{date.toLocaleDateString(dateOptions)}</div>
        <div>{entryName}</div>
      <img src="/assets/notebook.png" />
        </MDBTypography>
      {/* <MDBTypography tag='div' className='display-4 pb-3 mb-3 border-bottom'> */}
      {/* </MDBTypography> */}
      <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
        <div>{entry.text}</div>
      </MDBTypography>
      <button onClick={() => navigate(`/entries/${entry._id}/update`)}>Edit This Entry</button>
      <button onClick={() => handleDelete(entry._id)}>Delete This Entry</button>
    </>
  )
}
