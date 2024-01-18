import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AnimalList from "./AnimalList"


export default function ScavengerHunt() {
  const {userId, huntId} = useParams()
  const [huntData, setHuntData ]= useState(null)
  
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
  

  if(!huntData) {
    return <div>Loading...</div>
  }
 
  return (
    <div>
      <img className="scavenger-hunt-img" src={huntData.park_image} alt={huntData.hunt_title}></img>
      <h2>{huntData.hunt_title}</h2>
      <p>Date Created: {huntData.date_started}</p>
      {huntData.date_completed && <p>Completed: {huntData.date_completed}</p>}
      <AnimalList species={huntData.speciesList} />
    </div>
    
  )
}