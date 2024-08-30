import Image from 'next/image'

import { getCaseInfo } from '@/api/cases/Cases'
import { SOURCE } from '@/constants/static'
import PostClock from '@/constants/svg/PostClock'

import style from './style.module.css'
import { notFound } from 'next/navigation'
import { CaseType } from '@/api/cases/casesTypes'

interface IPostPage {
  caseInfo: CaseType
}

export const CaseHeader = async ({ caseInfo }: IPostPage) => {

  const date = new Date(caseInfo?.created_at || '').toLocaleDateString()

  return (
    <>
      {/* Image placeholder="blur" */}
      <Image className="rounded-xl m-0 mb-3" width={1600} height={900} src={`${SOURCE.url}cases/${caseInfo?.slug}/files/preview?field=slug`} alt={'изображение'} />
      <div className="flex my-4 text-[16px] font-medium items-center text-center">
        {date}
        <span className={`${style.slash} mx-1`} />
        <span className="me-1">
          <PostClock />
        </span>
        {caseInfo?.reading_time} минут
      </div>
    </>
  )
}
