import express from 'express'
import axios from 'axios'

const app = express()

app.get('/fetchParkData', async (req, res) => {
  const NP_API_KEY = process.env.NP_API_KEY
  const BASE_URL = 'https://developer.nps.gov/api/v1/parks'
  const parkCode = 'arch'

  const headers = {
    'X-Api-Key': NP_API_KEY,
    'Content-Type': 'application/json',
  }

  const requestOptions = {
    headers: headers,
  }

  try {
    const response = await axios.get(
      `${BASE_URL}?parkCode=${parkCode}`,
      requestOptions
    )

    // Axios automatically parses the JSON response
    const data = response.data
    res.json(data)

    const parkImgsData = data.data[0].images
    //console.log(parkImgsData)

    const parkImageURLs = parkImgsData.map((park) => {
      const image = park.url
      //console.log(image)
      return image
    })

    const parkDescription = data.data[0].description
    console.log(parkDescription)

    console.log(parkImageURLs)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})
