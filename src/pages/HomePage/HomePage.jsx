import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import './HomePage.css'
import '../../index.css'

export default function HomePage({user}) {
  return (
    <>
   <MDBContainer>

<div className="text-center">
  <h1 className="mb-4">Hi, {user.name}. Welcome to</h1>
  <img className="img-fluid mb-4" src="/assets/mistateLogo.png" alt="Logo" />
<section className="my-5">
  <h3 className="h3-responsive font-weight-bold text-center my-5">Discover a new path to mindfulness and emotional well-being. Track your emotions, understand your trends, and connect with others on a similar journey.</h3>
</section>
</div>

<section className="my-5">
  <h2 className="h2-responsive font-weight-bold text-center my-5"><MDBIcon fas icon="spa" />&nbsp; Stay Mindful of Your Emotions and Track Trends:</h2>
  <p className="lead grey-text text-center w-responsive mx-auto mb-5">Our intuitive tracking system not only allows you to monitor your daily emotions but also helps you identify patterns over time. Understand your emotional cycles and triggers through beautifully designed graphs and insights.</p>
</section>

<section className="my-5">
  <h2 className="h2-responsive font-weight-bold text-center my-5"><MDBIcon fas icon="chart-line" />&nbsp;Visual Insights into Your Emotional Landscape:</h2>
  <p className="lead grey-text text-center w-responsive mx-auto mb-5">See your emotional journey in vibrant colors and shapes. Our app transforms your emotional data into visual graphs, making it easier to comprehend and act upon. It's not just tracking; it's understanding at a glance.</p>
</section>

<section className="my-5">
  <h2 className="h2-responsive font-weight-bold text-center my-5"><MDBIcon fas icon="users" />&nbsp;Connect and Compare: You're Not Alone:</h2>
  <p className="lead grey-text text-center w-responsive mx-auto mb-5">Find comfort in numbers by comparing your emotional trends with those of other users. Gain insights into how others are feeling and foster a sense of community and shared experience.</p>
</section>

</MDBContainer>

    </>
  )
}