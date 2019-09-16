import express, { Application } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()
const PORT = process.env.PORT || 9000

const app: Application = express()
app.use(cors())

app.use('/api', routes)

app.listen(PORT, () => {
  console.log('It\'s Working!')
  console.log(`Running in port ${PORT}`)
})
