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
          const hunt = await axios.get(`/users/${userId}/hunts/${huntId}`, headers)
          
          setHuntData(hunt.data)
        } catch (err) {
          console.error('Error fetching hunt data', err)
        }
      }   
    }
    fetchData()
  }, [userId, huntId,])
  
  const handleDeleteHunt = () => {
    setIsModalOpen(true)
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
 
  return (
    <div className='scavenger-hunt-container'>
      <img className="scavenger-hunt-img" src={huntData.park_image} alt={huntData.hunt_title}></img>
      <div className='scavenger-hunt-info'>
        <div>
          <h2 className='scavenger-hunt-info-title'>{huntData.hunt_title}</h2>
          <p className='scavenger-hunt-dates'>Start Date: {formatDate(huntData.date_started)}</p>
          {huntData.date_completed && <p className='scavenger-hunt-dates'>Completed: {formatDate(huntData.date_completed)}</p>}
        </div>

        <button onClick={(e) => {
            e.preventDefault()
            handleDeleteHunt()
          }} className='scavenger-hunt-delete-btn'>
          Delete Hunt
        </button>
      </div>
      

      
      
      <AnimalList species={huntData.speciesList} />

      <ModalDeleteHunt
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteHuntConfirm}
      />
    </div>
    
  )
}