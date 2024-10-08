import { getAllArticles } from '@/api/admin/blog/Articles'
import { formatHumanReadableDateTime } from '@/constants/helpers'
import { SOURCE } from '@/constants/static'
import Link from 'next/link'

const BlogPage = async () => {
  const result = await getAllArticles({
    page: 1,
    size: 100,
  })

  const articles = result?.data

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold mt-10 mb-6">
        Блог{' '}
        <Link href={'/admin/blog/new'} className="align-center text-gray-500 hover:text-black transition transition-500">
          +
        </Link>
      </h1>

      <div className="overflow-x-auto w-full max-w-6xl rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">Название статьи</th>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">Ссылка</th>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">Опубликовано</th>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">Дата публикации</th>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600 font-bold uppercase tracking-wider">Дата изменения</th>
            </tr>
          </thead>
          <tbody>
            {articles?.map((article, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 max-w-xs overflow-x-auto whitespace-nowrap">
                  <Link className="text-blue-500 underline hover:text-blue-700" href={`/admin/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </td>
                <td className="px-6 py-4 max-w-xs overflow-x-auto whitespace-nowrap">
                  <Link className="text-blue-500 underline hover:text-blue-700" href={`${SOURCE.client_url}blog/${article.slug}`}>
                    Ссылка
                  </Link>
                </td>
                <td className="px-6 py-4 max-w-xs overflow-x-auto whitespace-nowrap">
                  {article.is_published ? 'Да' : 'Нет'}
                </td>
                <td className="px-6 py-4 max-w-xs overflow-x-auto whitespace-nowrap">{formatHumanReadableDateTime(article.created_at)}</td>
                <td className="px-6 py-4 max-w-xs overflow-x-auto whitespace-nowrap">{formatHumanReadableDateTime(article.updated_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BlogPage
