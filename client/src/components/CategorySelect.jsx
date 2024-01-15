import { useEffect, useState } from "react"
import axios from 'axios'

export default function CategorySelect({speciesList}) {
  const [selectedSpecies, setSelectedSpecies] = useState([])
  
  return (
    <div>
      <select name="" id="">
        <option value="">Select</option>
        {speciesList.map((species, index) => (
          <option key={index} value={species.species_id}>
            {species.common_name}
          </option>
        ))}
      </select>
    </div>
  )
   
}

// {
// 	"hunt_id": 5,
// 	"user_id": 5,
// 	"park_id": "zion",
// 	"hunt_title": "Zion Adventures",
// 	"is_complete": false,
// 	"date_started": "2024-01-04T05:00:00.000Z",
// 	"date_completed": null
// }