const { MongoClient } = require('mongodb')

new MongoClient(process.env.MONGODB_URL, { serverSelectionTimeoutMS: 8000 })
  .connect()
  .then(() => {
    console.log('connected')
    process.exit(0)
  })
  .catch((e) => {
    console.log('FAILED:', e.message)
    process.exit(1)
  })
