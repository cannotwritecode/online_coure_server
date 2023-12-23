import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compress from 'compression'
import helmet from 'helmet'
import path from 'path'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(compress())

app.use('/', userRoutes)
app.use('/', authRoutes)
app.use((err, req, res, next) => {
  if (err.name === 'UnathorizedError') {
    res.status(401).json({ error: err.name + ':' + err.message })
  }
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...')
  }
})

export default app
