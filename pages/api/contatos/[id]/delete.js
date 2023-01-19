import { connectToDatabase } from '../../../../util/mongodb';
import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()

    const id = req.url.split('/')[3]
    
    await db.collection('contacts').remove({'_id': ObjectId(id)})
    
    return res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}