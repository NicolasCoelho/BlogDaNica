import { connectToDatabase } from '../../../util/mongodb';
import session from '../../../util/session';

import Produto from '../../../models/produto';

export default session(async (req, res) => {
  try {
    const user = await req.session.get('user')

    if(!user) {
      res.status(307).redirect('/login')
    }

    const { db } = await connectToDatabase()
 
    const produto = new Produto( ...Object.values(await req.body) )
  
    const newItem = await db.collection('produtos').insert(produto)

    res.status(200).redirect('/admin')
  } catch (err) {
      console.log(err)
    res.status(500).json(err)
  }
})