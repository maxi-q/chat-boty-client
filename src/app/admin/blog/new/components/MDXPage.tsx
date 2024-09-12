import { Plugin } from 'unified'

import { compileMDX } from 'next-mdx-remote/rsc'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import style from './style.module.css'

import { useEffect, useState } from 'react'
import ArticleImage from './ArticleImage'
import Carousel from './Carousel'

interface IPostPage {
  content: string
}

export const MDXPage = ({ content }: IPostPage) => {
  const [compiledContent, setCompiledContent] = useState(<>Загрузка...</>)
  const overrideComponents = {
    Carousel: Carousel,
    Image: ArticleImage,
  }
  const getCompiledContent = async () => {
    try{

      const { content: result } = await compileMDX({
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
  
      setCompiledContent(result)
    } catch {
      setCompiledContent(<>Error</>)
    }
  }

  useEffect(() => {
    getCompiledContent()
  }, [content])

  return <div className={style.MDXdocument}>{compiledContent}</div>
}
