import Header from "../../../components/header/admin";
import session from '../../../util/session';
import { connectToDatabase } from '../../../util/mongodb';
import formatDate from "../../../util/formatDate";
import Link from 'next/link';

export default function Posts(props) {
  return (
    <>
      <Header></Header>
      <main className="container m-auto">
        <div className="my-2">
          <Link href="/admin/posts/criar" className="bg-primary text-white p-3">Novo Post</Link>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th></th>
              <th>Titulo</th>
              <th>Tag</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {props.results.map((post, i) => {
              return <>
                <tr className="hover:cursor-pointer" key={post._id}>
                  <td className="text-center py-2"><img src={post.thumbnail} className="m-auto" style={{ height: "80px"}}></img></td>
                  <td className="text-center">{post.title}</td>
                  <td className="text-center">{post.tag}</td>
                  <td className="text-center">{formatDate(post.createdAt, 1)}</td>
                  <td className="text-center">
                    <Link href={"/admin/posts/"+post._id}>
                      <i className="far fa-edit" title="Editar"></i>
                    </Link>
                    &nbsp;&nbsp;
                    <a target="_BLANK" href={"/post/"+post.url}>
                      <i className="far fa-eye" title="Vizualizar no site"></i>
                    </a>
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

export const getServerSideProps = session(async ({ req, res }) => {
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
  .collection('posts')
  .find({})
  .project({_id: 1, title: 1, url: 1, tag: 1, createdAt: 1, thumbnail: 1})
  .project({resume: 0, author: 0, readTime: 0, status: 0, image: 0, content: 0, metaDescription: 0, metaKeywords: 0})
  .sort({ metacritic: -1 })
  .toArray();

  console.log(results)

  results.forEach(element => {
    element['_id'] = `${element['_id']}`
  });

  console.log(results)

  return {
    props: { results }
  }
})
