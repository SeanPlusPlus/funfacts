import NextCors from "nextjs-cors"
import getEntry from "../../utils/getEntry"

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', ],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  const { id } = req.query
  const data = await getEntry(id)
  
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'JSON not foud' })
  }
}