import { withIronSession } from "next-iron-session";

export default function session(handler) {
    return withIronSession(handler, {
        password: process.env.SECRET_COOKIE_PASSWORD,
        cookieName: 'sessionID',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production' ? true : false,
        },
    })
}