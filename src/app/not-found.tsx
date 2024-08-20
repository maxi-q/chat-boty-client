import Image from 'next/image'
import Link from 'next/link'
import Shadow404 from './../constants/svg/Shadow404'
import styles from './styles/not-found.module.css'

export default function NotFound() {
  return (
    <main className={`${styles.main} h-[100vh] mt-[-116px] pt-[116px] flex flex-col items-center justify-center`}>
      <h1 className={`${styles.h1} text-[256px] h-[231px] inline-flex leading-[307.2px] items-center`}>
        <span className="relative">
          4 <Shadow404 className="absolute left-[40px] top-[240px]" />
        </span>
        <span className="inline-flex items-center mt-[50px]">
          <Image className="inline-block h-[231px] w-[238px]" width={800} height={800} src={'/main_abstract_figure.webp'} alt={'0'} />
        </span>
        <span className="relative">
          4 <Shadow404 className="absolute left-[40px] top-[240px]" />
        </span>
      </h1>
      <h2 className='text-2xl mt-14 font-bold tracking-widest uppercase'>Упс! страница не найдена</h2>
      <h3 className='text-xl mt-2 font-medium tracking-widest'>Попробуйте перейти на одну из этих</h3>
      <nav className="flex gap-5 mt-2">
        <LiComponent link="/">Главная</LiComponent>
        <LiComponent>Услуги</LiComponent>
        <LiComponent>Кейсы</LiComponent>
        <LiComponent>Контакты</LiComponent>
      </nav>
    </main>
  )
}

const LiComponent = ({
  children,
  link,
}: Readonly<{
  children: React.ReactNode
  link?: string
}>) => {
  return (
    <Link href={link || ''} className={`${styles.link} flex h-full items-center`}>
      <p className={'flex items-center text-lg tracking-widest'}>{children}</p>
    </Link>
  )
}
