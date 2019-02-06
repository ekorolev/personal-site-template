const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Env = use('Env')

const InfoBlocksStructure = {
  name: String,
  type: String,
  author_id: String,
  deleted: {
    type: Boolean,
    default: false
  },
  body: Object
}

const InfoBlocksSchema = new Schema(InfoBlocksStructure)

const InfoBlocks = mongoose.model('infoblocks', InfoBlocksSchema)

class Database {
  constructor() {
    let dbhost = Env.get('DB_MONGO_HOST') || 'localhost'
    let dbdatabase = Env.get('DB_MONGO_DATABASE') || 'personal-site'
    this._db = mongoose.connect(`mongodb://${dbhost}/${dbdatabase}`, { useNewUrlParser: true }, (error) => {
      if (error) {
        process.exit(0)
      }
    })
  }
}

module.exports = {
  models: {
    infoblocks: InfoBlocks,
    database: new Database()
  }
}