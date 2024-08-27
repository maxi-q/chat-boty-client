import { Plugin } from 'unified'

import { compileMDX } from 'next-mdx-remote/rsc'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import style from './style.module.css'

import { getArticleFile } from '@/api/blog/Articles'

import ArticleImage from '../components/ArticleImage'
import Carousel from '../components/Carousel'

interface IPostPage {
  params: { slug: string }
}

export const MDXPage = async ({ params }: IPostPage) => {
  const content = await getArticleFile({ slug: params.slug })

  if (!content) {
    return null
  }

  const overrideComponents = {
    Carousel: Carousel,
    Image: ArticleImage,
  }

  try {
    // Компиляция MDX с использованием remark-плагинов
    const { content: compiledContent } = await compileMDX({
      source: content,
      options: {
        // parseFrontmatter: false, // ставим true, если нам нужно собирать мета данные из файлов mdx (в моём случае данные приходят из API)
        mdxOptions: {
          remarkPlugins: [
            remarkSlug as Plugin,
            [
              remarkAutolinkHeadings as Plugin,
              {
                behavior: 'prepend', // 'append' или 'wrap' можно использовать в зависимости от того, куда вы хотите вставить иконку
                linkProperties: {
                  className: style.anchorLink,
                },
                content: {
                  type: 'text',
                  value: '🔗', 
                },
              },
            ],
          ],
        },
      },
      components: overrideComponents,
    })

    // Передача скомпилированного контента в MDXRemote
    return <div className={style.MDXdocument}>{compiledContent}</div>
  } catch (e) {
    console.log(e)
    return <>Error</>
  }
}
