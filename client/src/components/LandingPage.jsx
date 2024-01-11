import LandingPageCard from "./LandingPageCard"
import ParkImage from "./ParkImage"
import SignUp from "./SignUp"
import Login from "./Login"

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <ParkImage />
      <LandingPageCard />
        <SignUp />
        <Login />
    </div>
    
  )
}