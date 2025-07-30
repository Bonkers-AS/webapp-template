import express from 'express'
import cors from 'cors'
import pingRouter from './routes/ping'

const app = express()
app.use(cors())
app.use('/api/ping', pingRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
