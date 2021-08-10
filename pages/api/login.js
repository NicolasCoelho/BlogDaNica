import session from '../../util/session'

export default session(async (req, res) => {
  const { user, password } = await req.body 
  if (user === process.env.USER && password === process.env.USER_PASSWORD) {
    const user = { name: 'Nicole', isLoggedIn: true}
    req.session.set('user', user)
    await req.session.save()
    res.status(200).json({success: true})
  } else {
    res.status(401).json({ success: false, e: "Usuário ou senha incorretos" })
  }
})