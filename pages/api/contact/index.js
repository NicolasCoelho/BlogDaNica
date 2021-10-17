import { connectToDatabase } from '../../../util/mongodb';
import sendEmail from '../../../util/mailsender';

export default async (req, res) => {
  try {
    const { name, email, phone, state, clock, plan, message } = await req.body
    const { db } = await connectToDatabase()

    const newItem = await db.collection('contacts').insertOne({name, email, phone, state, clock, plan, message, status: 'new', createdAt: new Date().toISOString()})
    try {
      let result = await sendEmail(
        'Dicuore Organiza <comercial@dicuoreorganiza.com.br>',
        'nicolecoelhoorganizer@gmail.com',
        'Dicuore Organiza <dicuoreorganiza@gmail.com>',
        'Novo pedido de orçamento',
        `Novo pedido de orçamento: nome: ${name} - email: ${email} - Telefone: ${phone} - Horario para contato: ${clock} - Plano de interesse: ${plan} - Mensagem: ${message}`,
        `<div style=" width: 600px; text-align: center; padding: 20px 15px;">
          <h1>Novo cadastro na newsletter</h1>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Nome:</b>&nbsp;<span>${name}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Email:</b>&nbsp;<span>${email}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Telefone:</b>&nbsp;<span>${phone}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Estado:</b>&nbsp;<span>${state}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Melhor horário para contato:</b>&nbsp;<span>${clock}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Plano de interesse:</b>&nbsp;<span>${plan}</span>
          </p>
          <p style="width: 100%; margin-top: 10px; font-size: 18px;">
            <b>Mensagem:</b>&nbsp; <br/> <span>${message}</span>
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