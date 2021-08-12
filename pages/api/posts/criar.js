import { connectToDatabase } from '../../../util/mongodb';

import Post from '../../../models/post';

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
 
    const post = new Post( ...Object.values(await req.body) )
          
    const newItem = await db.collection('posts').insert(post)
      
    res.status(200).redirect('/admin')
  } catch (err) {
      console.log(err)
    res.status(500).json(err)
  }
}