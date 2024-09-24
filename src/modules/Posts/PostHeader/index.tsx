import Image from 'next/image'

import { SOURCE } from '@/constants/static'
import PostClock from '@/constants/svg/PostClock'

import { ArticleType as PostType } from '@/api/blog/blogTypes'
import style from './style.module.css'

interface IPostPage {
  postInfo: PostType
}

export const PostHeader = async ({ postInfo }: IPostPage) => {
  const date = new Date(postInfo?.created_at || '').toLocaleDateString()

  return (
    <>
      {/* Image placeholder="blur" */}
      <Image className="rounded-xl m-0 mb-3" width={1600} height={900} src={`${SOURCE.static_url}${postInfo?.preview_file_id}?field=id`} alt={'изображение'} />
      <div className="flex my-4 text-[16px] font-medium items-center text-center">
        {date}
        <span className={`${style.slash} mx-1`} />
        <span className="me-1">
          <PostClock />
        </span>
        {postInfo?.reading_time} минут
      </div>
    </>
  )
}
