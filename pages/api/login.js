import session from '../../util/session'
import { connectToDatabase } from '../../util/mongodb'

export default session(async (req, res) => {
  try {
    const { user, password } = await req.body

    const { db } = await connectToDatabase()

    const users = await db.collection('users').find({user, password}).toArray();

    if(users.length > 0) {
      const user = { name: 'Nicole', isLoggedIn: true}
      req.session.set('user', user)
      await req.session.save()
      res.status(200).json({success: true})
    } else {
      res.status(401).json({ success: false, e: "Usuário ou senha incorretos" })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})