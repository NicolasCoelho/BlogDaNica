import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  try {
    const { email } = await req.body

    const { db } = await connectToDatabase()

    const find = await db.collection('newsletter').find({email}).toArray();

    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}