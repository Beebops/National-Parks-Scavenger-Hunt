import {Link} from 'react-router-dom'
import {useState} from 'react'
import '../styles/animal.css'

export default function Animal({animal}) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  console.log(`Animal ${animal.common_name} checked is: ${isChecked}`)

  console.log(animal)
  return (
    <>
        <input
          type="checkbox"
          name={animal.species_id}
          checked={isChecked}
          onChange={() => handleChange(animal.species_id)} />
        <span className='checkmark'></span>
      <Link to={`/species/species-details/${animal.species_id}`}>
          <p className="animal-names">{animal.common_name.split(',')[0]}
          <span className="animal-scientific-name"> ({animal.scientific_name})</span>
          </p>
      </Link>
    </>
  )
}