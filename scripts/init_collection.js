
import { client, q } from "../utils/faunacli"

const {
  CreateCollection,
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
}

init()