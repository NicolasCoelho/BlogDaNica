import Head from "next/head";
import session from '../util/session';

export default function Admin() {
    return (
        <>
            <Head>
                <title>Adminstrador</title>
            </Head>
            <div className="container m-auto">
              <form method="POST" action="/api/logout">
                <button type="submit" className="bg-primary text-white">Sair</button>
              </form>
            </div>
        </>
    )
}

export const getServerSideProps = session(async ({req, res}) => {
  const user = req.session.get('user')

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: { user }
  }
})