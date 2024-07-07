import { CallToActionButton } from '@/components/ui/CallToAction'
import { ChatBubbles, Filter, Learning, Mail, SettingRoll, Settings, Streaming } from '@/constants/svg'
import { Nunito } from 'next/font/google'
import styles from './style.module.css'


const nunitoFont = Nunito({
  // weight: '700',
  subsets: ['latin'],
  // variable: '--font-poppins',
})

export const SecondScreen = () => {
  return (
    <main className={'section p-5 lg:pl-[40px] lg:pt-[70px] ' + styles.screen}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase">
        <span className={styles.titleSpan}>решения,</span> которые
        <br /> мы предлагаем:
      </h1>
      <main className="flex flex-wrap pt-16 gap-5 content-between justify-center">
        <CardShadow className='hidden xl:block'/>
        <Card title={'АВТОМАТИЗАЦИЯ\n CRM'} index={'01'} icons={<><SettingRoll/></>}>
          Настраиваем BlueSales проставление тегов, статусов, пишем всё на JSON, а также настраиваем amoCRM
        </Card>
        <Card title={'Создание чат-ботов\n и автоворонок'} index={'02'} icons={<><ChatBubbles/><Filter/></>}>
          Во всех соц. сетях и мессенджерах делаем автоворонки и чат-боты любой сложности с любыми интеграциями
        </Card>
        <br className={'hidden xl:block ' + styles.separator} />
        <Card title={'Настройка\n и оформление\n геткурс'} index={'03'} icons={<><Settings/><Learning/></>}>
          Подключение, интеграции, процессы, создание тренингов, продуктов, предложений — оставьте всё нам, сделаем как надо
        </Card>
        <Card title={'Настройка\n вебинарных\n комнат'} index={'04'} icons={<><Settings/><Streaming/></>}>
          Не знаете, что нужно скачать на ПК? Как сделать трансляцию лица с телефона, а захват экрана с ПК? Мы всё сделаем, а также вся тех. часть по Bizon365
        </Card>
        <CardShadow className='hidden xl:block'>
          <CallToActionButton className="text-[18px] pt-0" textClassName="left-[32px] md:left-[32px] top-[25px]">
            Обсудить проект
          </CallToActionButton>
        </CardShadow>
        <br className={'hidden xl:block ' + styles.separator} />
        <CardShadow className={'hidden xl:block ' + styles.accentCard} />
        <Card title={'Рассылки CRM'} index={'05'} icons={<><Mail/></>}>
          СМС и автопрозвоны, а также рассылки в Телеграм и WhatsApp. Нам нужны номера, мы даже можем выгрузить сами, нужен только доступ
        </Card>
        <Card title={'Email воронки'} index={'06'} icons={<><Mail/><Filter/></>}>
          Даа, канал жив и приносит заявки/покупки, не стоит его недооценивать, мы можем верстать любые письма и отправлять по вашей базе
        </Card>
        <CardShadow className='block xl:hidden'>
          <CallToActionButton className="text-[18px] pt-0" textClassName="left-[32px] md:left-[32px] top-[25px]">
            Обсудить проект
          </CallToActionButton>
        </CardShadow>
      </main>
    </main>
  )
}

const CardShadow = ({
  children,
  className,
}: Readonly<{
  children?: React.ReactNode
  className?: string
}>) => {
  return <div className={'w-[320px] rounded-[35px] ' + className}>{children}</div>
}

const Card = ({
  children,
  title,
  index,
  icons,
}: Readonly<{
  children: React.ReactNode
  title: string
  index: string
  icons: React.ReactNode
}>) => {
  return (
    <div className={styles.card + ' w-[320px] p-9 rounded-[35px]'}>
      <div className='flex gap-2 align-middle' style={{width: '40%'}}>{icons}</div>
      <h3 className={styles.number + ' pt-40 font-thin opacity-50'}>{index}</h3>
      <h1 className={styles.title + ' uppercase font-bold'}>{title}</h1>
      <div className={styles.line + ' my-5'} />
      <p className={styles.p + ' h-[100px]  text-sm'}>{children}</p>
    </div>
  )
}
