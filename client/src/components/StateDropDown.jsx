import {useState} from 'react'

const states = require('../states.js')

export default function StateDropDown() {
  const [selectedState, setSelectedState] = useState('')
  
  const handleChange = event => {
    const stateName = states.find(state => state.code === event.target.value)?.name || ''
    setSelectedState(stateName)
  }

  return (
    <div>
      <label htmlFor="state-dropdown">Choose a state:</label>
      <select className="state-drop-down" id="state-dropdown" value={selectedState} onChange={handleChange}>
        <option value="">Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state.code}>{state.code}</option>
        ))}
      </select>
          {selectedState && <p>You selected: {selectedState}</p>}
    </div>
    
  )
}