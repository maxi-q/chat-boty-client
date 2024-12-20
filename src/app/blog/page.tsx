import { Suspense } from 'react'
import { Page } from './modules/BlogPage'
import { Metadata } from 'next'


const Blog = ({ searchParams }: { searchParams: { page: number } }) => (
  <Suspense fallback={<h1>Загрузка...</h1>}>
    <Page page={searchParams?.page || 1} />
  </Suspense>
)

export default Blog
