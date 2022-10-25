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
  Get,
  Index,
  Lambda,
  Map,
  Match,
  Paginate,
  Var,
} = q

async function getEntry(entry_id) {
  const index_name = 'entries_by_id'
  try {
    const r = await client.query(
      Map(
        Paginate(
          Match(Index(index_name), entry_id)
        ),
        Lambda(
          "entry",
          Get(Var("entry"))
        )
      )
    )
    return r.data[0].data.json
  } catch {
    return false
  }
}

export default getEntry