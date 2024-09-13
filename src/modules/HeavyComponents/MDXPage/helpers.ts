import { Plugin } from 'unified'

import { MDXRemoteProps } from 'next-mdx-remote/rsc'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkSlug from 'remark-slug'
import ArticleImage from './components/ArticleImage'
import Carousel from './components/Carousel'
import style from './style.module.css'

const overrideComponents = {
  Carousel: Carousel,
  Image: ArticleImage,
}

export const settings: Omit<MDXRemoteProps, 'source'> = {
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
  components: overrideComponents
  
}