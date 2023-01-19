import { connectToDatabase } from '../../../../util/mongodb';
import session from '../../../../util/session';
import { ObjectId } from 'mongodb';

import Post from '../../../../models/post';

export default session(async (req, res) => {
  try {
    const user = await req.session.get('user')

    if(!user) {
      res.status(307).redirect('/login')
    }

    const id = req.url.split('/')[4]

    const { db } = await connectToDatabase()
 
    const post = new Post( ...Object.values(await req.body) )
          
    await db.collection('posts').update({'_id': ObjectId(id) }, post)
      
    return res.status(200).redirect('/admin/posts')
  } catch (err) {
      console.log(err)
    res.status(500).json(err)
  }
})