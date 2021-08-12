import Header from "../../../components/header/admin"
import session from '../../../util/session';

export default function CreateProduto() {
    return (
        <>
            <Header></Header>
            <main className="container m-auto">Criar produto</main>
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