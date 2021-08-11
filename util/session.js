import { withIronSession } from "next-iron-session";

export default function session(handler) {
    return withIronSession(handler, {
        password: "Teste123",
        cookieName: 'sessionID',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production' ? true : false,
        }
    })
}