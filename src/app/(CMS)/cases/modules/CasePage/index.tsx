import { redirect } from 'next/navigation'

import { getCases } from '@/api/cases/Cases'
import { CMSPage } from '@/app/(CMS)/modules/CMSPage'

export const CasePage = async ({ page }: { page: number }) => {
  if (page < 1) return redirect('?page=1')

  const pageData = await getCases({
    page: page,
    size: 8,
  })

  if (!pageData || !pageData.total_items) return <h1>Не удалось получить статьи</h1>
  if (pageData.size == 0 && pageData.total_pages > 0) return redirect(`?page=${pageData.total_pages}`)

  return (
    <CMSPage type={'cases'} page={page} pageData={pageData}>
      Кейсы продвижения услуг онлайн школ и <span className="whitespace-nowrap">интернет-магазинов</span>
    </CMSPage>
  )
}
