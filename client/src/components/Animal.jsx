import {Link} from 'react-router-dom'
export default function Animal() {
  return (
    <div>
      <h3>Animal Name</h3>
      <Link to="/animal-details"><p>Details about animal</p></Link>
    </div>
    
  )
}