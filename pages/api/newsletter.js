import { connectToDatabase } from '../../util/mongodb';
import sendEmail from '../../util/mailsender';

export default async (req, res) => {
  try {
    const { name, email } = await req.body

    const { db } = await connectToDatabase()

    await db.collection('newsletter').insertOne({name, email, createdAt: new Date().toISOString()})

    try {
      await sendEmail(
        'Dicuore Organiza <comercial@dicuoreorganiza.com.br>',
        'nicolecoelhoorganizer@gmail.com',
        'Dicuore Organiza <dicuoreorganiza@gmail.com>',
        'Nova inscrição na newsletter',
        `Novo cadastro: nome: ${name} - email: ${email}`,
        `<div style=" width: 600px; text-align: center; padding: 20px 15px;">
          <h1>Novo cadastro na newsletter</h1>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Nome:</b>&nbsp;<span>${name}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Email:</b>&nbsp;<span>${email}</span>
          </p>
        </div>`
      ) 
    } catch (error) {
        console.log(error)
    }

    res.status(200).json({success: true})
  } catch (err) {
    res.status(500).json(err)
  }
}