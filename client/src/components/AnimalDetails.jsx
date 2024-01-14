import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import '../styles/index.css'

export default function AnimalDetails() {
  const [speciesData, setSpeciesData] = useState(null)
  const {speciesId} = useParams()
  
  useEffect(() => {
    const fetchSpeciesData = async () => {
      try {
        const response = await axios.get(`/species/${speciesId}`)
        setSpeciesData(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchSpeciesData()
  }, [speciesId])

  if(!speciesData) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <img className="species-card-img" src={speciesData.species_image} alt={speciesData.common_name}></img>
      <h3>{speciesData.common_name}</h3>
      <p>{speciesData.species_description}</p>
      
      <div><a href={speciesData.species_wikipedia_link}>Learn more about the {speciesData.common_name}</a></div>
      
    
    </div>
    
  )
}