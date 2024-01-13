import {useState, useEffect} from 'react'
import axios from 'axios'
import ScavengerHuntList from "./ScavengerHuntList"

export default function Home() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem('userId')
      const token = localStorage.getItem('token')
      if(userId && token) {
        const headers = {
          headers: {
            Authorization: `Bearer ${token}`
          }}
        try {
          const userResponse = await axios.get(`/users/${userId}`, headers)
          const huntsResponse = await axios.get(`/users/${userId}/hunts`, headers)
          setUserData({
            ...userResponse.data,
            hunts: huntsResponse.data
          })
        } catch (err) {
        console.error('Error fetching data', err)
        setError(err)
      } finally{
        setLoading(false)
      }
    }
  }
        

    fetchUserData()
  }, [])
  
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error loading data</div>

  return (
    <>
      <h2>{userData?.username}'s Home Page</h2>
          {userData?.hunts && userData.hunts.length > 0 ? (
            <>
              <p>You have {userData.hunts.length} hunts</p>
              <ScavengerHuntList hunts={userData.hunts} />
            </>
          ) : (
            <p>You currently have no scavenger hunts.</p>
          )}
        </>
    
  )
}