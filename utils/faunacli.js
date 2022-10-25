const faunadb = require('faunadb')

require('dotenv').config()

const FAUNA_SECRET = process.env.FAUNA_SECRET

export const q = faunadb.query
export const client = new faunadb.Client({
  secret: FAUNA_SECRET,
  domain: "db.us.fauna.com",
  port: 443,
  scheme: 'https',
})