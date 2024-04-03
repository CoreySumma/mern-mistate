import { useParams, useNavigate } from "react-router-dom"
import { MDBTypography } from 'mdb-react-ui-kit';


export default function EntryDetailPage({ entries, handleDelete }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const entry = entries.find((entry) => entry._id === id);
  
  return (
    <div>
      {entry && <>
        <MDBTypography tag='div' className='display-6 pb-3 mb-3 border-bottom'>
          {/* <div>{entry.emotion}</div> */}
          <div className="title"><u>{entry.title}</u></div>
          {/* <img className="imgClass" src="/assets/notebook.png" /> */}
          <br />
          <div>{new Date(entry.updatedAt).toLocaleDateString()}</div>
        </MDBTypography>
        <MDBTypography tag='div' className='display-6 pb-3 mb-3 border-bottom'>
          <div>{entry.text}</div>
        </MDBTypography>
        <button onClick={() => navigate(`/entries/${entry._id}/update`)}>Edit This Entry</button>
        <button onClick={() => handleDelete(entry._id)}>Delete This Entry</button>
      </>}
    </div>
  )
}
