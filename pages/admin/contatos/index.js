import Header from "../../../components/header/admin";
import session from '../../../util/session';
import { connectToDatabase } from '../../../util/mongodb';
import formatDate from "../../../util/formatDate";

export default function Contatos(props) {

    function setItemRead(id) {
      
    }

    async function deleteItem(id) {
      
    }

    return (
        <>
          <Header></Header>
          <main className="container m-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                {props.results.map((contact, i) => {
                  return <>
                    <tr className="hover:cursor-pointer"> 
                      <td className="text-center py-2">{contact.name}</td>
                      <td className="text-center">{contact.email}</td>
                      <td className="text-center">{contact.status}</td>
                      <td className="text-center">{formatDate(contact.createdAt, 1)}</td>
                      <td className="text-center">
                        {(contact.status === 'new') ? <i className="far fa-eye" onClick={setItemRead(contact['_id'])} title="Marcar como lida"></i> : '' }
                        &nbsp;&nbsp;
                        <i onClick={deleteItem()} className="far fa-window-close" title="Excluir"></i></td>
                    </tr>
                    <tr>
                      <td colSpan="5">
                        <div className="flex p-4 bg-gray-100 justify-between items-center">
                          <div className="w-1/3">
                            <div><b>Telefone: </b>{contact.phone}</div>
                            <div><b>Estado: </b>{contact.state}</div>  
                          </div>
                          <div className="w-1/3">
                            <div><b>Horário para contato:</b> {contact.clock}</div>
                            <div><b>Plano:</b> {contact.plan}</div>
                          </div>
                          <div className="w-1/3"><b>Mensagem:</b> {contact.message}</div>
                        </div>
                      </td>
                    </tr>
                  </>
                })}
              </tbody>
              <tfoot></tfoot>
            </table>
          </main>
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

    const { db } = await connectToDatabase()
  
    const results = await db
    .collection('contacts')
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

    results.forEach(element => {
      element['_id'] = `${element['_id']}`
    });

    return {
      props: { results }
    }
  })