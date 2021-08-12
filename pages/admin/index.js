import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header/admin";
import session from '../../util/session';

export default function Admin() {
    return (
        <>
            <Head>
                <title>Adminstrador</title>
            </Head>
            <Header></Header>
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