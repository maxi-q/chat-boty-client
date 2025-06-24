
import PostsNext from "@/constants/svg/PostsNext";
import PostsPrev from "@/constants/svg/PostsPrev";
import Link from "next/link";
import styles from './style.module.css'
import { getPagesNumbs } from "@/constants/helpers";
import { getArticlesType } from "@/api/admin/(CMS)/types/ArticleTypes";

export interface IPaginator {
  page: number;
  pageData: getArticlesType;
}

export const Paginator = ({
  pageData,
  page
}: IPaginator) => {
  const pageNumbs = getPagesNumbs(page, pageData.total_pages)

  return <>
  <div className="flex">
        <DefaultButton page={+page - 1} direction="left" />
        {!pageNumbs.includes(1) && <NumberButton number={1} />}
        {!pageNumbs.includes(1) && !pageNumbs.includes(2) && <span className="text-lg pt-2">...</span>}

        {pageNumbs.map((el, i) => (
          <NumberButton key={i} number={el} disable={el == page} />
        ))}

        {!pageNumbs.includes(pageData.total_pages) && !pageNumbs.includes(pageData.total_pages - 1) && <span className="text-lg pt-2">...</span>}
        {!pageNumbs.includes(pageData.total_pages) && <NumberButton number={pageData.total_pages} />}
        <DefaultButton page={+page + 1} direction="right" />
      </div>
      </>
}

const NumberButton = ({ number, disable }: { number: number; disable?: boolean }) => (
  <Link
    href={{ query: { page: number } }}
    className={`flex text-lg font-medium items-center justify-center cursor-pointer no-underline w-[40px] h-[40px] ${disable && styles.selectPage}`}
  >
    {number}
  </Link>
)
const DefaultButton: React.FC<{ direction: 'left' | 'right'; page: number }> = ({ direction, page }) => (
  <Link href={{ query: { page: page } }} className={`p-2 cursor-pointer ${direction === 'left' ? 'ml-2' : 'mr-2'}`}>
    {direction === 'left' ? <PostsPrev /> : <PostsNext />}
  </Link>
)