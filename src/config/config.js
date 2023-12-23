require('dotenv').config()
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 2003,
  jwtSecret:
    process.env.JWT_SECRET ||
    '091af885f64756960162e96b93a4147c5b82a33544a5d472a4bd644c1c1f857e',
  mongoUri: process.MONGO_URI,
}

export default config
