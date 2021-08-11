import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  try {
    const { name, email, phone, state, clock, plan, message } = await req.body
    const { db } = await connectToDatabase()

    const newItem = await db.collection('contacts').insert({name, email, phone, state, clock, plan, message, status: 'new', createdAt: new Date().toISOString()})
    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}