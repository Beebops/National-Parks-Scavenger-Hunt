import {Link, useParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import '../styles/animal.css'

export default function Animal({animal}) {
  const [isChecked, setIsChecked] = useState(false)
  const {huntId} = useParams()

  const handleChange = async (speciesId) => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
  
    const token = localStorage.getItem('token');
    if (token) {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      try {
        const response = await axios.put(`${huntId}/species/${speciesId}`, { isFound: newCheckedState }, headers);
        console.log(response.data);
      } catch (err) {
        console.error('Error updating species status', err);
      }
    }
  };
  

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