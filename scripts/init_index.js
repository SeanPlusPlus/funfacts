const faunadb = require('faunadb')

require('dotenv').config()

const FAUNA_SECRET = process.env.FAUNA_SECRET
const q = faunadb.query
const client = new faunadb.Client({
  secret: FAUNA_SECRET,
  domain: "db.us.fauna.com",
  port: 443,
  scheme: 'https',
})

const {
  CreateIndex,
  Collection,
} = q

const init = async () => {
  await client.query(
    CreateIndex({
      name: 'game_by_id',
      source: Collection("Games"),
      unique: true,
      terms: [
        {
          field: ["data", "game_id"]
        }
      ]
    })
  )
}

init()