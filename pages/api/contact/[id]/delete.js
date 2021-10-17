import { connectToDatabase } from '../../../../util/mongodb';

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()

    const id = req.params.id

    console.log(id)
        
    //await db.collection('contacts').remove({id})
    
    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}