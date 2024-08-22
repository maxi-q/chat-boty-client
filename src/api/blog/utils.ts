import { getArticles } from './Articles'

export const fetchAllBlogSlugs = async () => {
  const articles = await getArticles({
    page: 1,
    size: 100,
  })

  const slugs = articles?.data.map((el) => (el.slug ))

  return (
    slugs || []
  )
}
