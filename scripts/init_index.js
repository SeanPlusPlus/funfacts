import { client, q } from "../utils/faunacli"

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