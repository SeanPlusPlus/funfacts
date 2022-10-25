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
  Create,
  Collection,
} = q

async function newEntry(entry_id, json) {
  const collection_name = 'Entries'
  const entry = await client.query(
    Create(
      Collection(collection_name),
      { data: { entry_id, json } }
    )
  )
  return entry.data.entry_id
}

export default newEntry
