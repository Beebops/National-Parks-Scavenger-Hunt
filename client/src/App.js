import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import LandingPageCard from './components/LandingPageCard'
import ScavengerHunts from './components/ScavengerHunts'
import Login from './components/Login'
import Nav from './components/Nav'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-scavenger-hunt' element={<ScavengerHunts />} />
        </Routes>
        <LandingPageCard />
        <SignUp />
        <Login />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
