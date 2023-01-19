import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className="admin-header container m-auto flex justify-between py-4">
              <div className="flex items-center">
                <nav>
                  <ul>
                    <li><Link href="/admin/posts">Posts</Link></li>
                    <li><Link href="/admin/produtos/criar">Criar Produto</Link></li>
                    <li><Link href="/admin/contatos">Contatos</Link></li>
                    <li><Link href="/admin/newsletter">Newsletter</Link></li>
                  </ul>
                </nav>
              </div>
              <div>
                <form method="POST" action="/api/logout">
                  <button type="submit" className="bg-primary text-white">Sair</button>
                </form>
              </div>
            </header>
        </>
    )
}