import { redirect } from 'next/navigation'

import { getArticles } from '@/api/blog/Articles'
import { CMSPage } from '@/app/(CMS)/modules/CMSPage'

export const BlogPage = async ({ page }: { page: number }) => {
  if (page < 1) return redirect('?page=1')

  const pageData = await getArticles({
    page: page,
    size: 8,
  })

  if (!pageData || !pageData.total_items) return <h1>Не удалось получить статьи</h1>
  if (pageData.size == 0 && pageData.total_pages > 0) return redirect(`?page=${pageData.total_pages}`)

  return (
    <CMSPage type={'blog'} page={page} pageData={pageData}>
      Статьи блога о продвижении с помощью чат бота
    </CMSPage>
  )
}
