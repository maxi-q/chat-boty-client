import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.css'

export default function NotFound() {
  return (
    <main className={`${styles.main} h-[100vh] mt-[-116px] pt-[116px] flex flex-col items-center justify-center`}>
      <Image className="inline-block h-[231px] w-[238px]" width={800} height={800} src={'/main_abstract_figure.webp'} alt={'0'} />
      <h1 className={`${styles.h1} text-3xl inline-flex items-center`}>
        К сожалению, эта страница еще не готова :(
      </h1>
      <h3 className='text-xl mt-14 font-medium tracking-widest'>Попробуйте перейти на одну из этих</h3>
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
