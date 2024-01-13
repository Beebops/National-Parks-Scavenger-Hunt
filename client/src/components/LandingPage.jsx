import LandingPageCard from "./LandingPageCard"

import SignUp from "./SignUp"
import Login from "./Login"

export default function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
     
      <LandingPageCard />
        <SignUp />
        <Login />
    </div>
    
  )
}