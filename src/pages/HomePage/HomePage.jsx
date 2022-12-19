import './HomePage.css'

export default function HomePage({user}) {
  return (
    <>
    <h1>Welcome {user.name}</h1>
    <img src="/assets/mistateLogo.png" />
    <h2>We believe in mindfulness and are here to</h2>
    <h2>help you reflect, and understand more about yourself with each day.</h2>
    </>
  )
}