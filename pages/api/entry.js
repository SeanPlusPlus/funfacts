import uid from "../../utils/uid"
import newEntry from "../../utils/newEntry"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  const json = req.body
  const entry_id = await newEntry(uid(8), json)
  res.status(200).json({
    entry_id,
  })
}
