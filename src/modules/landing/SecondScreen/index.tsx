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
    <main className={`section p-5 laptop:pl-[40px] laptop:pt-[70px] ${styles.screen}`}>
      <h1 className={`${styles.mainTitle} text-3xl tablet:text-5xl laptop:text-5xl uppercase`}>
        <span className={styles.titleSpan}>решения,</span> которые
        <br /> мы предлагаем:
      </h1>
      <main className="flex flex-wrap pt-16 gap-1 laptop:gap-5 content-between justify-center">
        <CardShadow className="hidden laptop:block" />
        <Card
          title={'АВТОМАТИЗАЦИЯ\n CRM'}
          index={'01'}
          icons={
            <>
              <SettingRoll />
            </>
          }
        >
          Настраиваем BlueSales проставление тегов, статусов, пишем всё на JSON, а также настраиваем amoCRM
        </Card>
        <Card
          title={'Создание чат-ботов\n и автоворонок'}
          index={'02'}
          icons={
            <>
              <ChatBubbles />
              <Filter />
            </>
          }
        >
          Во всех соц. сетях и мессенджерах делаем автоворонки и чат-боты любой сложности с любыми интеграциями
        </Card>
        <CardShadow className="hidden desktop:block" />
        <br className={`hidden laptop:block ${styles.separator}`} />
        <Card
          title={'Настройка\n и оформление\n геткурс'}
          index={'03'}
          icons={
            <>
              <Settings />
              <Learning />
            </>
          }
        >
          Подключение, интеграции, процессы, создание тренингов, продуктов, предложений — оставьте всё нам, сделаем как надо
        </Card>
        <Card
          title={'Настройка\n вебинарных\n комнат'}
          index={'04'}
          icons={
            <>
              <Settings />
              <Streaming />
            </>
          }
        >
          Не знаете, что нужно скачать на ПК? Как сделать трансляцию лица с телефона, а захват экрана с ПК? Мы всё сделаем, а также вся тех. часть по Bizon365
        </Card>
        <CardShadow className="hidden laptop:block">
          <CallToActionButton className="text-[18px] pt-0" textClassName="left-[32px] md:left-[32px] top-[25px]">
            Обсудить проект
          </CallToActionButton>
        </CardShadow>
        <CardShadow className="hidden desktop:block" />
        <br className={`hidden desktop:block ${styles.separator}`} />
        <CardShadow className="hidden desktop:block" />
        <CardShadow className={`hidden laptop:block ${styles.accentCard}`} />
        <CardShadow className="hidden tablet:block laptop:hidden w-full">
          <CallToActionButton className="text-[18px] pt-0 w-full tablet:max-w-[999px] laptop:max-w-[400px] " textClassName="left-[32px] md:left-[32px] top-[25px]">
            Обсудить проект
          </CallToActionButton>
        </CardShadow>
        <Card
          title={'Рассылки CRM'}
          index={'05'}
          icons={
            <>
              <Mail />
            </>
          }
        >
          СМС и автопрозвоны, а также рассылки в Телеграм и WhatsApp. Нам нужны номера, мы даже можем выгрузить сами, нужен только доступ
        </Card>
        <Card
          title={'Email воронки'}
          index={'06'}
          icons={
            <>
              <Mail />
              <Filter />
            </>
          }
        >
          Даа, канал жив и приносит заявки/покупки, не стоит его недооценивать, мы можем верстать любые письма и отправлять по вашей базе
        </Card>
        <CardShadow className="block tablet:hidden">
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
  return <div className={'w-[400px] rounded-[35px] ' + className}>{children}</div>
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
    <div className={`${styles.card} flex flex-col w-[320px]  tablet:w-[346px] tablet:h-[480px] laptop:w-[400px] laptop:h-[540px] p-9 rounded-[35px]`}>
      <div className="flex flex-1 gap-2 align-middle" style={{ width: '40%' }}>
        {icons}
      </div>
      <h3 className={`${styles.number} font-thin opacity-50 tablet:pt-[50px] laptop:pt-0`}>{index}</h3>
      <h1 className={`${styles.title} uppercase font-bold text-xl`}>{title}</h1>
      <div className={`${styles.line} my-5`} />
      <p className={`${styles.p} text-lg`}>{children}</p>
    </div>
  )
}
