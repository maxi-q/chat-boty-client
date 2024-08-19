import { getArticles } from '@/api/blog/Articles'
import ArticleNext from '@/constants/svg/ArticleNext'
import ArticlePrev from '@/constants/svg/ArticlePrev'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import { Card } from './components/Card'

import { getPagesNumbs } from './helpers/pagination'
import styles from './style.module.css'

const Page = async ({ page }: { page: number }) => {
  if (page < 1) return redirect('?page=1')

  const pageData = await getArticles({
    page: page,
    size: 2,
  })

  if (!pageData) return <h1>Не удалось получить статьи</h1>
  if (pageData.size == 0) return redirect(`?page=${pageData.total_pages}`)

  const pageNumbs = getPagesNumbs(page, pageData.total_pages)

  return (
    <>
      <div className="flex flex-wrap">
        {pageData.data.map((el) => (
          <Card key={el.id} created_at={el.created_at} duration={el.reading_time} title={el.title} link={el.slug} image={el.slug} />
        ))}
      </div>
      <div className="flex">
        <DefaultButton page={+page - 1} direction="left" />
        {!pageNumbs.includes(1) && <NumberButton number={1} />}
        {!pageNumbs.includes(1) && !pageNumbs.includes(2) && <span className="text-lg pt-2">...</span>}

        {pageNumbs.map((el, i) => (
          <NumberButton key={i} number={el} disable={el == page} />
        ))}

        {!pageNumbs.includes(pageData.total_pages) && !pageNumbs.includes(pageData.total_pages - 1) && <span className="text-lg pt-2">...</span>}
        {!pageNumbs.includes(pageData.total_pages) && <NumberButton number={pageData.total_pages} />}
        <DefaultButton page={+page + 1} direction="right" />
      </div>
    </>
  )
}

const NumberButton = ({ number, disable }: { number: number; disable?: boolean }) => (
  <Link
    href={{ query: { page: number } }}
    className={`flex text-lg font-medium items-center justify-center cursor-pointer no-underline w-[40px] h-[40px] ${disable && styles.selectPage}`}
  >
    {number}
  </Link>
)
const DefaultButton: React.FC<{ direction: 'left' | 'right'; page: number }> = ({ direction, page }) => (
  <Link href={{ query: { page: page } }} className={`p-2 cursor-pointer ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>
    {direction === 'left' ? <ArticlePrev /> : <ArticleNext />}
  </Link>
)

const Blog = ({ searchParams: { page } }: { searchParams: { page: number } }) => (
  <Suspense fallback={<h1>Загрузка...</h1>}>
    <Page page={page || 1} />
  </Suspense>
)

export default Blog
