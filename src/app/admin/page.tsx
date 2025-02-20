import Link from 'next/link'
import { RefreshButton } from './ui'

const Admin = () => {

  return (
    <main className="flex flex-col items-center justify-start h-screen bg-gray-100 relative pt-10">
      <h1 className="text-4xl font-bold mb-8">Админка</h1>

      <RefreshButton onClick={revalidateCash}/>

      <div className="gap-5 flex flex-row">
        <Link href="/admin/cases">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Кейсы</button>
        </Link>

        <Link href="/admin/blog">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Блог</button>
        </Link>
      </div>
    </main>
  )
}

export default Admin
