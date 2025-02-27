import { Article } from "@/api/admin/(CMS)/types/ArticleTypes"
import { FileArticleMDX } from "@/modules/HeavyComponents/MDXPage"
import { PostHeader } from "@/modules/Articles/ArticleHeader"

interface ICMSArticle {
  articleInfo: Article
  rawContent: string
}

export const CMSArticle = ({
  articleInfo,
  rawContent
}: ICMSArticle) => {

  return (
    <div className="max-w-[852px] mx-auto break-words">
      <div>
        <PostHeader postInfo={articleInfo} />
        <FileArticleMDX rawContent={rawContent}/>
      </div>
    </div>
  )
}