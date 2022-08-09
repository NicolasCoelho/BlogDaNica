import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  try {
    const { name, email } = await req.body

    const { db } = await connectToDatabase()

    await db.collection('newsletter').insertOne({name, email, createdAt: new Date().toISOString()})

    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}