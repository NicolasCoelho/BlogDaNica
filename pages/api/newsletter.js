import session from '../../util/session'

export default session(async (req, res) => {
  try {
    const { name, email } = await req.body
    
  } catch (err) {
    res.status(500).json(err)
  }
})