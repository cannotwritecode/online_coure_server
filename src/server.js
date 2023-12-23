import config from './../config/congig'
import app from './express'
import mongoose from 'mongoose'

main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/onlinecourse')
}

app.listen(config.port, (err) => {
  err && console.log(err)
  console.info('Server running on port %s.', config.port)
})
