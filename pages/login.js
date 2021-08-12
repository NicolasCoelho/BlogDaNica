import Head from "next/head";

import session from '../util/session';

export default function Login() {
    async function login(e) {
        e.preventDefault();
        const user = e.target.querySelector('#user').value
        const password = e.target.querySelector('#password').value

        const payload = {
            user,
            password
        }
        let response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        response = await response.json()
        if (response.success) {
            window.location = '/admin'
        } else {
            document.querySelector('#err').style.display = 'block'
        }
    }
    
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main className="max-w-[500px] text-center m-auto px-10">
                <h1 className="m-10 font-play">Dicuori Organizza</h1>
                <form onSubmit={login}>
                    <div className="mb-10 text-left">
                        <label>Usuário:</label>
                        <input type="text" id="user" name="user"></input>
                    </div>
                    <div className="mb-10 text-left">
                        <label>Senha:</label>
                        <input type="password" id="password" name="password"></input>
                    </div>
                    <button type="submit" className="primary text-white">Entrar</button>
                </form>
                <span className="font-sans text-primary my-10" style={{ display: 'none' }} id="err">Usuário ou senha invalidos</span>
            </main>
        </>
    )
}

export const getServerSideProps = session(async ({req, res}) => {
    const user = req.session.get('user')
  
    if (user) {
      return {
        redirect: {
          destination: '/admin',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
  })