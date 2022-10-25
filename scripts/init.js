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
  await client.query(
    CreateCollection({ name: "Users" })
  )
  await client.query(
    CreateCollection({ name: "Facts" })
  )
  await client.query(
    CreateCollection({ name: "Games" })
  )
  await client.query(
    CreateCollection({ name: "Votes" })
  )
  
  await client.query(
    CreateIndex({
      name: 'users_by_game',
      source: Collection("Users"),
      unique: true,
      terms: [
        {
          field: ["data", "item_id"]
        }
      ]
    })
  )
  await client.query(
    CreateIndex({
      name: 'items_by_tag',
      source: Collection("Items"),
      unique: true,
      terms: [
        {
          field: ["data", "tag_name"]
        }
      ]
    })
  )
}

init()