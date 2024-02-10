import { MDBContainer } from 'mdb-react-ui-kit';
import './HomePage.css'
import '../../index.css'

export default function HomePage({user}) {
  return (
    <>
    <MDBContainer>
    <h1>Welcome, {user.name}.</h1>
    <img className="imgClass "src="/assets/mistateLogo.png" />
    <h2>We believe in mindfulness and are here to</h2>
    <h2>help you reflect, and understand more about yourself with each day.</h2>
    <h2>Create an Entry to start your journey inward.</h2>
    </MDBContainer>
    </>
  )
}