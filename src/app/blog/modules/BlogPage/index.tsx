import { getArticles } from '@/api/blog/Articles'
import PostsNext from '@/constants/svg/PostsNext'
import PostsPrev from '@/constants/svg/PostsPrev'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Card } from '../../components/Card'

import { getPagesNumbs } from '../../../../constants/helpers'
import styles from './style.module.css'

export const Page = async ({ page }: { page: number }) => {
  if (page < 1) return redirect('?page=1')

  const pageData = await getArticles({
    page: page,
    size: 8,
  })

  if (!pageData || !pageData.total_items) return <h1>Не удалось получить кейсы</h1>
  if (pageData.size == 0 && pageData.total_pages > 0) return redirect(`?page=${pageData.total_pages}`)

  const pageNumbs = getPagesNumbs(page, pageData.total_pages)

  return (
    <div className="max-w-full">
      <div className="flex flex-wrap w-full">
        {pageData.data.map((el) => (
          <Card key={el.id} created_at={el.created_at} duration={el.reading_time} title={el.title} link={el.slug} image={el.preview_file_id} />
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
    </div>
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
    {direction === 'left' ? <PostsPrev /> : <PostsNext />}
  </Link>
)
