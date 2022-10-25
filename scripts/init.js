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
  CreateCollection,
  CreateIndex,
  Collection,
} = q

const init = async () => {
  const init_collection = await client.query(
    CreateCollection({ name: "Entries" })
  )
  const init_index = await client.query(
    CreateIndex({
      name: 'entries_by_id',
      source: Collection("Entries"),
      unique: true,
      terms: [
        {
          field: ["data", "entry_id"]
        }
      ]
    })
  )
  console.log(init_collection, init_index)
}

init()