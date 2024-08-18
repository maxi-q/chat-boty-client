import { getArticles } from '@/api/blog/Articles'
import { Suspense } from 'react'
import { Card } from './components/Card'
import ArticlePrev from '@/constants/svg/ArticlePrev'
import ArticleNext from '@/constants/svg/ArticleNext'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const Page = async ({ page }: { page: number }) => {
  if (page < 1) return redirect('?page=1')

  const res = await getArticles({
    page: page,
    size: 8,
  })

  if (!res) return <h1>Не удалось получить статьи</h1>
  if (res.size == 0) return redirect(`?page=${res.total_pages}`)
  
  console.log(res)
  
  console.log(res, `page: ${page}`)

  

  return (
    <>
    <div className="flex flex-wrap">
      {res.data.map((el) => (
        <Card key={el.id} created_at={el.created_at} duration={el.reading_time} title={el.title} link={el.slug} image={el.slug} />
      ))}
    </div>
    <div className='flex'>
      <DefaultButton page={+page - 1} direction='left'/>
      <DefaultButton page={+page + 1} direction='right'/>
    </div>
    </>
  )
} 

const DefaultButton: React.FC<{ direction: 'left' | 'right'; page: number }> = ({ direction, page }) => (
  <Link href={{query: {page: page}}} className={`p-2 cursor-pointer ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>{direction === 'left' ? <ArticlePrev /> : <ArticleNext />}</Link>
)

const Blog = ({ searchParams: { page } }: { searchParams: { page: number } }) => (
  <Suspense fallback={<h1>Загрузка...</h1>}>
    <Page page={page || 1} />
  </Suspense>
)

export default Blog
