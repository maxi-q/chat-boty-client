import { Article } from "@/api/admin/(CMS)/types/ArticleTypes"
import { getBlogArticleInfo } from "@/api/blog/Articles"
import { SOURCE } from "@/constants/static"

interface IGenerateMetadata {
  slug: string
  type: 'blog' | 'cases'
  articleInfo?: Article
}

export const generateCMSArticleMetadata = async ({ slug, type, articleInfo }: IGenerateMetadata) => {

  return {
    title: articleInfo?.web_title || articleInfo?.title,
    description: articleInfo?.web_description || articleInfo?.short_description,
    keywords: articleInfo?.keywords,
    openGraph: {
      url: `https://chat-boty.com/${type}/${slug}`,
      type: 'article',
      title: articleInfo?.og_title,
      description: articleInfo?.og_description,
      images: [`${SOURCE.static_url}${articleInfo?.preview_og_file_id}?field=id`],
    },
  }
}