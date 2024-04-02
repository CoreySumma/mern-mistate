import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
      </MDBContainer>
      <div className="text-center py-3">
        © {new Date().getFullYear()} MiState: A Mindfulness Journey
      </div>
    </MDBFooter>
  );
};

