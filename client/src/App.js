import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import NewScavengerHunt from './components/NewScavengerHunt'
import ScavengerHunt from './components/ScavengerHunt'
import ScavengerHuntCard from './components/ScavengerHuntCard'
import Nav from './components/Nav'
import AnimalDetails from './components/AnimalDetails'

function App() {
  return (
    <div className='App-container'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/new-scavenger-hunt' element={<NewScavengerHunt />} />
          <Route
            path='/users/:userId/hunts/:huntId'
            element={<ScavengerHunt />}
          />
          <Route path='/species/:speciesId' element={<AnimalDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
