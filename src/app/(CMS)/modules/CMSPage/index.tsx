import { getPagesNumbs } from "@/constants/helpers"
import { CMSCard } from "./components/CommonCard"
import { type IPaginator, Paginator } from "./modules/Paginator"

interface ICMSPage extends IPaginator {
  children: React.ReactNode
  type: 'blog' | 'cases'
}

export const CMSPage = ({
  pageData,
  page,
  children,
  type
}: ICMSPage) => {
  return (
    <div className="max-w-full">
      <h1 className="mb-7 text-2xl phone:text-3xl tablet:text-4xl laptop:text-4xl desktop:text-5xl">{children}</h1>
      <div className="flex flex-wrap w-full">
        {pageData.data.map((el) => (
          <CMSCard key={el.id} created_at={el.created_at} duration={el.reading_time} title={el.title} link={`/${type}/${el.slug}`} image={el.preview_file_id} views_count={el.views_count} />
        ))}
      </div>

      <Paginator page={page} pageData={pageData} />
    </div>
  )
}