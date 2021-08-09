import Head from "next/head";
import session from '../util/session';

export default function Admin() {
    return (
        <>
            <Head>
                <title>Adminstrador</title>
            </Head>
            <div className="container m-auto">

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