import Head from "next/head";

export default function Login({props}) {
    function login(e) {
        e.preventDefault();
        const user = e.target.querySelector('#user').value
        const password = e.target.querySelector('#password').value

        const body = {
            user,
            password
        }
        console.log(body)
        //TODO: Fetch api login route and redirect to admin if is ok
    }
    
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <main className="max-w-[500px] text-center m-auto px-10">
                <h1 className="m-10 text-2xl font-play">Dicuori Organizza</h1>
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
            </main>
        </>
    )
}