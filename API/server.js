import express from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

const users = []

app.get('/', (req, res) => {
  return res.send('Hello from the root')
})

app.get('/users', (req, res) => {
  return res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    console.log(hashedPassword)

    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    req.statusCode(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find((user) => user.name === req.body.name)
  if (!user) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success!')
    } else {
      res.send('Not allowed')
    }
  } catch {
    return res.statusCode(500).send()
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
