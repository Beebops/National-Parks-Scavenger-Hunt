import {useState, useEffect} from 'react'
import axios from 'axios'
import ParkList from './ParkList.jsx'

const states = require('../states.js')

export default function StateDropDown() {
  const [selectedStateCode, setSelectedStateCode] = useState('')
  const [parks, setParks] = useState([])

  useEffect(() => {
    const fetchParks = async () => {
      if(selectedStateCode) {
        try {
          const response = await axios.get(`/parks?state=${selectedStateCode}`)
          setParks(response.data)
        } catch (err) {
          console.error('Error fetching parks', err)
        }
      }
      
    }
    fetchParks()
  }, [selectedStateCode])
  
  const handleChange = event => {
    setSelectedStateCode(event.target.value)
  }

  return (
    <div>
      <label htmlFor="state-dropdown">Choose a state:</label>
      <select className="state-drop-down" id="state-dropdown" value={selectedStateCode} onChange={handleChange}>
        <option value="">Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state.code}>{state.name}</option>
        ))}
      </select>
          {selectedStateCode && <ParkList parks={parks} />}
    </div>
    
  )
}