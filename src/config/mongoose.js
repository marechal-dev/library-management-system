const mongoose = require('mongoose')

function atlasConnection() {
  mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_ATLAS_USER}:${process.env.MONGODB_ATLAS_PASSWORD}@${process.env.MONGODB_ATLAS_CLUSTER}.usv4w.mongodb.net/libraryManagenment?retryWrites=true&w=majority`,
  ).then(() => {
    console.log("Connected to Atlas!")
  }).catch((error) => {
    console.log(`Error: ${error}`)
  })
}

module.exports = { atlasConnection }
