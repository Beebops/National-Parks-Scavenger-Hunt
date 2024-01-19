import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/animal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import ModalDeleteAnimal from './ModalDeleteAnimal'

export default function Animal({animal}) {
  const [isChecked, setIsChecked] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {huntId} = useParams()
  

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId')
        if (token && userId) {
          const response = await axios.get(`/users/${userId}/hunts/${huntId}/species-status`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          // find the species object of the current animal
          const speciesFound = response.data.find(species => species.species_id === animal.species_id)
          if(speciesFound) {
            setIsChecked(speciesFound.isfound)          
          } else {
            setIsChecked(false)
          }
        }     
      } catch (err) {
        console.error('Error fetching species status', err);
      }
    }
    fetchStatus()
  }, [huntId, animal.species_id])

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
      } catch (err) {
        console.error('Error updating species status', err);
      }
    }
  };

  const handleDeleteSpecies = () => {
    setIsModalOpen(true)
  }
  
  const handleDeleteSpeciesConfirm = async () => {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    if(userId && token) {
      try {
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`
          }}
        await axios.delete(`/users/${userId}/hunts/${huntId}/species/${animal.species_id}`, headers)    
        console.log('deleted')
      } catch (err) {
        console.error('Deletion failed', err)
      }
    }  
    
    setIsModalOpen(false)
  }

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
      <button onClick={(e) => {
        e.preventDefault()
        handleDeleteSpecies()
      }}>
        <FontAwesomeIcon className="fa-delete" icon={faDeleteLeft} />
      </button>
      <ModalDeleteAnimal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteSpeciesConfirm}
        animal={animal}
      />
    </>
  )
}