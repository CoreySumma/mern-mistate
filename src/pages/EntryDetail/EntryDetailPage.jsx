import { useParams, useNavigate } from "react-router-dom"
import { MDBTypography } from 'mdb-react-ui-kit';


export default function EntryDetailPage({ entries, handleDelete }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const entry = entries.find((entry) => entry._id === id); // Payload?

  return (
    <>
      <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
        {/* <div>{date.toLocaleDateString(dateOptions)}</div> */}
        <div>{new Date(entry.updatedAt).toLocaleDateString()}</div>
        <div>{entry.title}</div>
        <img src="/assets/notebook.png" />
      </MDBTypography>
      <MDBTypography tag='div' className='display-5 pb-3 mb-3 border-bottom'>
        <div>{entry.text}</div>
      </MDBTypography>
      <button onClick={() => navigate(`/entries/${entry._id}/update`)}>Edit This Entry</button>
      <button onClick={() => handleDelete(entry._id)}>Delete This Entry</button>
     
    </> 
  )
}


// export default function EntryDetailPage({ entries, handleDelete }) {
//   const navigate = useNavigate();
//   const { entryName } = useParams();

//   const [entry, setEntry] = useState(null);

//   useEffect(() => {
//     const entryFromArray = entries.find((entry) => entry.title === entryName);
//     setEntry(entryFromArray);
//   }, [entries, entryName]);