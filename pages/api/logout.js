import session from '../../util/session'

export default session(async (req, res) => {
  try {
      const user = await req.session.get('user')
      if (user) {
        req.session.destroy()
      }
      res.status(200).redirect('/')
  } catch (err) {
    res.status(500).json(err)
  }
})