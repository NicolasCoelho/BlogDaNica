import { connectToDatabase } from '../../../../util/mongodb';

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
        
    
    
    
    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}