import Header from "../../../components/header/admin"
import session from '../../../util/session';

export default function Contatos() {
    return (
        <>
            <Header></Header>
            <main className="container m-auto">Contatos page</main>
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