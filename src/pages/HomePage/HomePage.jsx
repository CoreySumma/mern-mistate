import { MDBContainer } from 'mdb-react-ui-kit';
import './HomePage.css'
import '../../index.css'

export default function HomePage({user}) {
  return (
    <>
   <MDBContainer>

<div class="text-center">
  <h1 class="mb-4">Hi, {user.name}</h1>
  <img className="img-fluid mb-4" src="/assets/mistateLogo.png" alt="Logo" />
<section class="my-5">
  <h3 class="h3-responsive font-weight-bold text-center my-5">Discover a new path to mindfulness and emotional well-being. Track your emotions, understand your trends, and connect with others on a similar journey.</h3>
</section>
</div>

<section class="my-5">
  <h2 class="h2-responsive font-weight-bold text-center my-5">Stay Mindful of Your Emotions and Track Trends:</h2>
  <p class="lead grey-text text-center w-responsive mx-auto mb-5">Our intuitive tracking system not only allows you to monitor your daily emotions but also helps you identify patterns over time. Understand your emotional cycles and triggers through beautifully designed graphs and insights.</p>
</section>

<section class="my-5">
  <h2 class="h2-responsive font-weight-bold text-center my-5">Visual Insights into Your Emotional Landscape:</h2>
  <p class="lead grey-text text-center w-responsive mx-auto mb-5">See your emotional journey in vibrant colors and shapes. Our app transforms your emotional data into visual graphs, making it easier to comprehend and act upon. It's not just tracking; it's understanding at a glance.</p>
</section>

<section class="my-5">
  <h2 class="h2-responsive font-weight-bold text-center my-5">Connect and Compare: You're Not Alone:</h2>
  <p class="lead grey-text text-center w-responsive mx-auto mb-5">Find comfort in numbers by comparing your emotional trends with those of other users. Gain insights into how others are feeling and foster a sense of community and shared experience.</p>
</section>

</MDBContainer>

    </>
  )
}