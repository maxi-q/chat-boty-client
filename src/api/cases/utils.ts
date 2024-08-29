import { getCases } from './Cases'

export const fetchAllCasesSlugs = async () => {
  const articles = await getCases({
    page: 1,
    size: 100,
  })

  const slugs = articles?.data.map((el) => el.slug)

  return slugs || []
}
