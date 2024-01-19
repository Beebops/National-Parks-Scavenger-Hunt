import {useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import formatDate from '../formatDate'
import axios from 'axios'
import AnimalList from "./AnimalList"
import ModalDeleteHunt from './ModalDeleteHunt'
import '../styles/scavengerhunt.css'


export default function ScavengerHunt() {
  const {userId, huntId} = useParams()
  const [huntData, setHuntData ]= useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('userId')
      const token = localStorage.getItem('token')

      if(userId && token) {
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`
          }}
        try {
          const huntResponse = await axios.get(`/users/${userId}/hunts/${huntId}`, headers)
          const speciesStatusResponse = await axios.get(`/users/${userId}/hunts/${huntId}/species-status`, headers)

          // Merge species data with isFound status
          const updatedSpeciesList = huntResponse.data.speciesList.map(species => {
            const foundStatus = speciesStatusResponse.data.find(status => status.species_id === species.species_id)
            return {...species, isfound: foundStatus ? foundStatus.isfound : false}
          })
          setHuntData({ ...huntResponse.data, speciesList: updatedSpeciesList })
          
        } catch (err) {
          console.error('Error fetching hunt data', err)
        }
      }   
    }
    fetchData()
  }, [userId, huntId,])

  const checkAllSpeciesFound = () => {
    return huntData.speciesList.every(species => species.isfound);
  }

  const handleMarkHuntComplete = async () => {
    if (checkAllSpeciesFound()) {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
  
      if (userId && token) {
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        try {
          const updateData = { isComplete: true };
          await axios.put(`/users/${userId}/hunts/${huntId}`, updateData, headers);
          setHuntData({ ...huntData, is_complete: true });
        } catch (err) {
          console.error('Error marking hunt as complete', err);
        }
      }
    } else {
      console.log('Not all species found');
    }
  };
  
  
  const handleDeleteHunt = () => {
    setIsModalOpen(true)
  }

  const handleDeleteSpecies = (deletedSpeciesId) => {
    setHuntData(prevData => ({
      ...prevData,
      speciesList: prevData.speciesList.filter(species => species.species_id !== deletedSpeciesId)
    }))
  }

  const handleDeleteHuntConfirm = async () => { 
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    if(userId && token) {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`
        }}
    try {   
     await axios.delete(`/users/${userId}/hunts/${huntId}`, headers)  
    } catch (err) {
      console.error('Logout failed', err)
    }
  }
    setIsModalOpen(false)
    navigate('/home')
  }

  if(!huntData) {
    return <div>Loading...</div>
  }
 
  console.log(huntData)
  return (
    <div className='scavenger-hunt-container'>
      <img className="scavenger-hunt-img" src={huntData.park_image} alt={huntData.hunt_title}></img>
      <div className='scavenger-hunt-info'>
        <div>
          <h2 className='scavenger-hunt-info-title'>{huntData.hunt_title}</h2>
          <p className='scavenger-hunt-dates'>Start Date: {formatDate(huntData.date_started)}</p>
          {huntData.date_completed && <p className='scavenger-hunt-dates'>Completed: {formatDate(huntData.date_completed)}</p>}
        </div>
        <button
          disabled={!checkAllSpeciesFound()}
          onClick={handleMarkHuntComplete}
          className='scavenger-hunt-complete-btn'>
            Mark Hunt Complete</button>
        <button onClick={(e) => {
            e.preventDefault()
            handleDeleteHunt()
          }} className='scavenger-hunt-delete-btn'>
          Delete Hunt
        </button>    
      </div>
      
      <AnimalList species={huntData.speciesList} onDeleteSpecies={handleDeleteSpecies} />

      <ModalDeleteHunt
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteHuntConfirm}
      />
    </div>    
  )
}