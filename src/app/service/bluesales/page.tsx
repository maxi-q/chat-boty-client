import { CallToActionButton } from '@/components/ui/CallToAction'
import { SOURCE } from '@/constants/static'
import { TextCarousel } from '@/modules/landing/FiveScreen/modules/TextCarousel'
import { VideoCarousel } from '@/modules/landing/FiveScreen/modules/VideoCarousel'
import Image from 'next/image'
import styles from './style.module.css'

import Chart from '@/constants/svg/Chart'
import Diplomat from '@/constants/svg/Diplomat'
import WorkerMan from '@/constants/svg/WorkerMan'
import { Tablet } from '@/modules/landing/SevenScreen/AnimatedTablet'
import { CallBackForm } from '@/modules/landing/SevenScreen/CallBackForm'
import { Onest } from 'next/font/google'
import type { Metadata } from 'next'

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CRM система Bluesales - автоматизация продаж в Вконтакте',
  description:
    'Столкнулись с проблемой в настройске crm системы Bluesales? Поможем автоматизировать ваши продажи: написание ботов на json, скриптов и настройка каналов. Подробности тут!',
  keywords: 'автоматизация продаж crm, crm Bluesales',
  openGraph: {
    title: 'CRM система Bluesales - автоматизация продаж в Вконтакте',
    description:
      'Столкнулись с проблемой в настройске crm системы Bluesales? Поможем автоматизировать ваши продажи: написание ботов на json, скриптов и настройка каналов. Подробности тут!',
    url: 'https://chat-boty.com/service/bluesales',
  },
}

export default function Page() {
  return (
    <div className={`overflow-hidden laptop:px-5 px-0`}>
      <main>
        <section className={`mb-5 mt-5`}>
          <div className={`${styles.container} relative`}>
            <div className={`flex items-center w-full tablet:gap-x-9 gap-x-0 laptop:flex-row tablet:flex-col-reverse flex-col`}>
              <div className={`desktop:max-w-[1000px] w-full z-[2] relative`}>
                <h1
                  className={`font-bold desktop:text-8xl laptop:text-[88px] phone:text-[48px] text-[36px] desktop:leading-[100px] laptop:leading-[92px] phone:leading-[50.4px] leading-[37.8px] text-black uppercase text-center nokia:text-start`}
                >
                  Автоматизация CRM BlueSales
                </h1>
                <p
                  className={`${onest.className} font-medium desktop:text-[32px] laptop:text-[28px] tablet:text-[24px] nokia:text-[20px] text-[16px] desktop:leading-[38px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16px] mt-[24px] phone:mb-[48px] mb-[20px] text-center nokia:text-start`}
                >
                  Сосредоточьтесь на продажах,
                  <br className={`tablet:hidden block`} /> всё остальное сделаем мы.
                </p>
                <CallToActionButton color="blue" textClassName="p-0 !left-0 " className={`tablet:w-auto w-full max-w-full`}>
                  ОСТАВИТЬ ЗАЯВКУ
                </CallToActionButton>
                {/* <button className={`flex phone:w-auto w-full relative rounded-[999px] ${styles.bgBluesales} nokia:py-[34px] p-[20px] pl-[20px] nokia:pl-[48px] nokia:pr-[124px]`}>
                <span className={`text-start ${onest.className} font-normal desktop:text-desktop nokia:text-laptop text-xs text-white`}>
                  ОСТАВИТЬ ЗАЯВКУ
                </span>
                <img className={`absolute -right-1 top-0 h-full`} src={`./assets/images/icons/btn_icon.svg`} alt={``}/>
              </button> */}
              </div>
              <div className={`desktop:max-w-[704px] w-full`}>
                <Image
                  width={650}
                  height={383}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}homeimg?field=slug`}
                  alt={`Фото image`}
                  className={`select-none tablet:absolute tablet:mt-0 nokia:translate-x-0 translate-x-5 mt-3 static desktop:top-0 laptop:top-[70px] desktop:-bottom-4 bottom-[20px] right-0 desktop:w-[990px] tablet:h-[277px] laptop:w-[650px] desktop:h-[552px] laptop:h-[383px] w-full tablet:w-auto`}
                />
                {/* <img className={`nokia:absolute nokia:mt-0 nokia:translate-x-0 translate-x-5 mt-3 static desktop:top-0 laptop:top-[70px] desktop:-bottom-4 bottom-[20px] right-0 desktop:w-[990px] nokia:h-[277px] laptop:w-[650px] desktop:h-[552px] laptop:h-[383px] h-full` src={`./assets/images/home_img.png` alt={``}/> */}
              </div>
            </div>
          </div>
        </section>

        <section className={`mb-5`}>
          <div className={`flex laptop:flex-row flex-col tablet:gap-5 gap-3 w-full max-w-[1880px] mx-auto`}>
            <div className={`${styles.container} w-full`}>
              <div>
                <Image width={834} height={344} loading={`lazy`} src={`${SOURCE.static_url}services1?field=slug`} alt={`Фото image`} className={`select-none w-full mb-9`} />
                {/* <img className={`w-full mb-9`} src={`${SOURCE.static_url}services1?field=slug`} alt={``}/> */}
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px] laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] ${styles.textBluesales} mb-3`}
                >
                  Пишем ботов на JSON
                </h3>
                <p
                  className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                >
                  Можно автоматизировать весь путь клиента
                </p>
              </div>
            </div>
            <div className={`${styles.container} w-full`}>
              <div>
                <Image width={607} height={250} loading={`lazy`} src={`${SOURCE.static_url}services2?field=slug`} alt={`Фото image`} className={`select-none w-full mb-9`} />
                {/* <img className={`w-full mb-9` src={`./assets/images/services2.png` alt={``}/> */}
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px] laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] ${styles.textBluesales} mb-3`}
                >
                  Пишем скрипты
                </h3>
                <p
                  className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                >
                  Для передачи данных из BlueSales в другие сервисы
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.container} mt-5`}>
            <div className={`flex laptop:flex-row flex-col items-center gap-9`}>
              <Image width={665} height={262} loading={`lazy`} src={`${SOURCE.static_url}services3?field=slug`} alt={`Фото image`} className={`select-none laptop:w-1/2 w-full`} />
              {/* <img className={`laptop:w-1/2 w-full` src={`./assets/images/services3.png` alt={``}/> */}
              <div className={`laptop:w-1/2 w-full`}>
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px] laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] ${styles.textBluesales} mb-3 whitespace-wrap`}
                >
                  Подключаем и настраиваем каналы
                </h3>
                <p
                  className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                >
                  Вконтакте, Одноклассники, Авито, Инстаграм
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.container} mt-5 relative flex tablet:flex-row flex-col`}>
            <div className={`relative z-[2] flex laptop:flex-row flex-col items-center gap-9`}>
              <div className={`laptop:max-w-[1165px] w-full`}>
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px] laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] ${styles.textBluesales} nokia:mb-12 mb-5 whitespace-wrap`}
                >
                  Что можно автоматизировать?
                </h3>
                <ul className={`flex flex-col nokia:gap-5 gap-3`}>
                  <li className={`flex gap-3 items-center`}>
                    <svg className={`flex-shrink-0`} width={`24`} height={`25`} viewBox={`0 0 24 25`} fill={`none`} xmlns={`http://www.w3.org/2000/svg`}>
                      <path
                        fill-rule={`evenodd`}
                        clip-rule={`evenodd`}
                        d={`M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5ZM16.0303 9.46967C16.3232 9.76256 16.3232 10.2374 16.0303 10.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.5 13.9393L12.7348 11.7045L14.9697 9.46967C15.2626 9.17678 15.7374 9.17678 16.0303 9.46967Z`}
                        fill={`#008BE8`}
                      />
                    </svg>
                    <span
                      className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                    >
                      Проставление тегов / CRM статусов
                    </span>
                  </li>
                  <li className={`flex gap-3 items-center`}>
                    <svg className={`flex-shrink-0`} width={`24`} height={`25`} viewBox={`0 0 24 25`} fill={`none`} xmlns={`http://www.w3.org/2000/svg`}>
                      <path
                        fill-rule={`evenodd`}
                        clip-rule={`evenodd`}
                        d={`M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5ZM16.0303 9.46967C16.3232 9.76256 16.3232 10.2374 16.0303 10.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.5 13.9393L12.7348 11.7045L14.9697 9.46967C15.2626 9.17678 15.7374 9.17678 16.0303 9.46967Z`}
                        fill={`#008BE8`}
                      />
                    </svg>
                    <span
                      className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                    >
                      Автораспределение по менеджерам
                    </span>
                  </li>
                  <li className={`flex gap-3 items-center`}>
                    <svg className={`flex-shrink-0`} width={`24`} height={`25`} viewBox={`0 0 24 25`} fill={`none`} xmlns={`http://www.w3.org/2000/svg`}>
                      <path
                        fill-rule={`evenodd`}
                        clip-rule={`evenodd`}
                        d={`M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5ZM16.0303 9.46967C16.3232 9.76256 16.3232 10.2374 16.0303 10.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.5 13.9393L12.7348 11.7045L14.9697 9.46967C15.2626 9.17678 15.7374 9.17678 16.0303 9.46967Z`}
                        fill={`#008BE8`}
                      />
                    </svg>
                    <span
                      className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                    >
                      Напоминания менеджерам
                    </span>
                  </li>
                  <li className={`flex gap-3 items-center`}>
                    <svg className={`flex-shrink-0`} width={`24`} height={`25`} viewBox={`0 0 24 25`} fill={`none`} xmlns={`http://www.w3.org/2000/svg`}>
                      <path
                        fill-rule={`evenodd`}
                        clip-rule={`evenodd`}
                        d={`M22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5C2 6.97715 6.47715 2.5 12 2.5C17.5228 2.5 22 6.97715 22 12.5ZM16.0303 9.46967C16.3232 9.76256 16.3232 10.2374 16.0303 10.5303L11.0303 15.5303C10.7374 15.8232 10.2626 15.8232 9.96967 15.5303L7.96967 13.5303C7.67678 13.2374 7.67678 12.7626 7.96967 12.4697C8.26256 12.1768 8.73744 12.1768 9.03033 12.4697L10.5 13.9393L12.7348 11.7045L14.9697 9.46967C15.2626 9.17678 15.7374 9.17678 16.0303 9.46967Z`}
                        fill={`#008BE8`}
                      />
                    </svg>
                    <span
                      className={`desktop:text-[32px] desktop:leading-[38.4px] laptop:text-[28px] text-[16px] tablet:text-[24px] nokia:text-[20px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16.8px] ${onest.className} font-medium`}
                    >
                      Заполнение дополнительных полей
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                width={820}
                height={304}
                loading={`lazy`}
                src={`${SOURCE.static_url}eskalator?field=slug`}
                alt={`Фото image`}
                className={`select-none w-auto tablet:absolute static ml-auto tablet:translate-x-0 tablet:mt-0 mt-3 translate-x-5 desktop:top-[17px] laptop:bottom-0 bottom-[58px] right-0 desktop:h-[426px] laptop:h-[304px] h-[158px]`}
              />
              {/* <img className={`nokia:absolute static ml-auto nokia:translate-x-0 nokia:mt-0 mt-3 translate-x-5 desktop:top-[17px] laptop:bottom-0 bottom-[58px] right-0 desktop:h-[426px] laptop:h-[304px] h-[158px]`} src={`${SOURCE.static_url}eskalator?field=slug`} alt={``}/> */}
            </div>
          </div>
        </section>

        <section className={`mb-5`}>
          <div className={`${styles.container}`}>
            <h3
              className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] text-black nokia:mb-12 mb-4`}
            >
              Что вы <span className={`${styles.textBluesales}`}>получите от этого?</span>
            </h3>
            <div className={`laptop:flex block gap-[12px] flex-wrap`}>
              <div
                className={`rounded-laptop bg-card-bg px-6 py-12 text-center laptop:max-w-[calc(100%_/_3_-_8px)] max-w-full laptop:block flex laptop:flex-col tablet:flex-row flex-col items-center laptop:mb-0 mb-3`}
              >
                <Image
                  width={387}
                  height={272}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}card1?field=slug`}
                  alt={`Фото image`}
                  className={`select-none laptop:mb-9 nokia:mb-0 mb-5 w-full laptop:max-w-full nokia:max-w-[250px]`}
                />
                {/* <img className={`laptop:mb-9 nokia:mb-0 mb-5 w-full laptop:max-w-full nokia:max-w-[250px]` src={`./assets/images/card1.png` alt={``}/> */}
                <div className={`laptop:text-center tablet:text-start text-center`}>
                  <h6
                    className={`${styles['font-Gilroy']} font-semibold mb-3 desktop:text-[36px] laptop:text-[32px] phone:text-[28px] nokia:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] phone:leading-[33px] nokia:leading-[28px] leading-[23.86px]`}
                  >
                    Концентрация на продажах
                  </h6>
                  <p
                    className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px]`}
                  >
                    Идёт работа с клиентом, вместо траты времени на проставление статусов и тегов.
                  </p>
                </div>
              </div>
              <div
                className={`rounded-laptop bg-card-bg px-6 py-12 text-center laptop:max-w-[calc(100%_/_3_-_8px)] max-w-full laptop:block flex laptop:flex-col tablet:flex-row flex-col items-center laptop:mb-0 mb-3`}
              >
                <Image
                  width={387}
                  height={272}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}card2?field=slug`}
                  alt={`Фото image`}
                  className={`select-none laptop:mb-9 nokia:mb-0 mb-5 w-full laptop:max-w-full nokia:max-w-[250px]`}
                />
                {/* <img className={`laptop:mb-9 nokia:mb-0 mb-5 w-full laptop:max-w-full nokia:max-w-[250px]`} src={`./assets/images/card2.png`} alt={``} /> */}
                <div className={`laptop:text-center tablet:text-start text-center`}>
                  <h6
                    className={`${styles['font-Gilroy']} font-semibold mb-3 desktop:text-[36px] laptop:text-[32px] phone:text-[28px] nokia:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] phone:leading-[33px] nokia:leading-[28px] leading-[23.86px]`}
                  >
                    Контроль цифр
                  </h6>
                  <p
                    className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px]`}
                  >
                    Статистика по лидам на каждом этапе, а также по каждому менеджеру.
                  </p>
                </div>
              </div>
              <div
                className={`rounded-laptop bg-card-bg px-6 py-12 text-center laptop:max-w-[calc(100%_/_3_-_8px)] max-w-full laptop:block flex laptop:flex-col tablet:flex-row flex-col items-center`}
              >
                <Image
                  width={387}
                  height={272}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}card3?field=slug`}
                  alt={`Фото image`}
                  className={`select-none laptop:mb-9 nokia:mb-0 mb-5 w-full laptop:max-w-full nokia:max-w-[250px]`}
                />
                {/* <img className={`laptop:mb-9 nokia:mb-0 mb-5 w-full laptop:max-w-full nokia:max-w-[250px]` src={`./assets/images/card3.png` alt={``}/> */}
                <div className={`laptop:text-center tablet:text-start text-center`}>
                  <h6
                    className={`${styles['font-Gilroy']} font-semibold mb-3 desktop:text-[36px] laptop:text-[32px] phone:text-[28px] nokia:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] phone:leading-[33px] nokia:leading-[28px] leading-[23.86px]`}
                  >
                    Никто не пропадёт
                  </h6>
                  <p
                    className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px]`}
                  >
                    CRM создаст лида, распределит между менеджерами и напомнит ему связаться.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`max-w-[1880px] mx-auto`}>
            <div className={`flex laptop:flex-row flex-col nokia:gap-5 gap-3`}>
              <div className={`${styles.container} container`}>
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[50px] text-[28px] tablet:text-[48px] nokia:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] text-black nokia:mb-12 mb-4`}
                >
                  Чем хороша Bluesales
                </h3>
                <ul className={`flex gap-[10px] flex-col`}>
                  <li className={`bg-secondary-50 rounded-[20px] flex items-center p-2 gap-3`}>
                    <div
                      className={`rounded-[15px] flex-shrink-0 bg-white border-transparent border-8 nokia:w-[96px] nokia:h-[96px] w-[72px] h-[72px] flex items-center justify-center`}
                    >
                      <svg
                        className={`nokia:w-[48px] nokia:h-[48px] w-[36px] h-[36px]`}
                        width={`48`}
                        height={`48`}
                        viewBox={`0 0 48 48`}
                        fill={`none`}
                        xmlns={`http://www.w3.org/2000/svg`}
                      >
                        <path
                          d={`M40.5398 32.53L41.9508 24.3704C42.3032 22.3324 40.736 20.4684 38.67 20.4684H28.3078C27.2808 20.4684 26.4988 19.5466 26.665 18.532L27.9904 10.4428C28.2056 9.1287 28.1442 7.784 27.8098 6.49504C27.5328 5.42728 26.709 4.5699 25.6256 4.22186L25.3356 4.1287C24.6808 3.91836 23.9662 3.9673 23.3488 4.26478C22.6694 4.59222 22.1722 5.18946 21.988 5.89978L21.0366 9.56748C20.7338 10.7345 20.293 11.8609 19.7244 12.9252C18.8937 14.4803 17.6093 15.7249 16.2742 16.8754L13.3968 19.355C12.5854 20.0542 12.1594 21.1012 12.2517 22.1688L13.876 40.9542C14.025 42.6772 15.4656 44 17.1932 44H26.4904C33.453 44 39.395 39.1488 40.5398 32.53Z`}
                          fill={`#008BE8`}
                        />
                        <path
                          fill-rule={`evenodd`}
                          clip-rule={`evenodd`}
                          d={`M5.93534 18.9702C6.73786 18.9355 7.42522 19.5393 7.49442 20.3396L9.43762 42.8126C9.56244 44.2562 8.42536 45.5004 6.97342 45.5004C5.60578 45.5004 4.5 44.3908 4.5 43.0258V20.4688C4.5 19.6655 5.1328 19.0048 5.93534 18.9702Z`}
                          fill={`#008BE8`}
                        />
                      </svg>
                    </div>
                    <span
                      className={`${styles['font-Gilroy']} font-semibold desktop:text-[36px] laptop:text-[32px] phone:text-[28px] nokia:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] phone:leading-[33px] nokia:leading-[28px] leading-[23.86px] pr-1`}
                    >
                      Стабильная работа сервиса
                    </span>
                  </li>
                  <li className={`bg-secondary-50 rounded-[20px] flex items-center p-2 gap-3`}>
                    <div
                      className={`rounded-[15px] flex-shrink-0 bg-white border-transparent border-8 nokia:w-[96px] nokia:h-[96px] w-[72px] h-[72px] flex items-center justify-center`}
                    >
                      <svg
                        className={`nokia:w-[48px] nokia:h-[48px] w-[36px] h-[36px]`}
                        width={`48`}
                        height={`48`}
                        viewBox={`0 0 48 48`}
                        fill={`none`}
                        xmlns={`http://www.w3.org/2000/svg`}
                      >
                        <path
                          fill-rule={`evenodd`}
                          clip-rule={`evenodd`}
                          d={`M26.9262 2.3197C26.1466 2 25.1582 2 23.1814 2C21.2045 2 20.2161 2 19.4365 2.3197C18.397 2.74598 17.571 3.56362 17.1405 4.59272C16.9439 5.06251 16.867 5.60885 16.8369 6.40578C16.7926 7.57693 16.1859 8.66097 15.1607 9.24695C14.1354 9.83292 12.8838 9.81103 11.8372 9.26339C11.1249 8.89073 10.6085 8.6835 10.0993 8.61714C8.98368 8.47174 7.85545 8.77101 6.96278 9.44912C6.29326 9.9577 5.79905 10.8051 4.81065 12.4999C3.82225 14.1946 3.32807 15.042 3.21792 15.8703C3.07103 16.9747 3.37335 18.0916 4.05834 18.9753C4.37099 19.3788 4.81038 19.7177 5.49234 20.1419C6.49488 20.7656 7.13996 21.828 7.13989 23C7.13983 24.172 6.49478 25.2342 5.49234 25.8577C4.81027 26.2821 4.3708 26.6212 4.05813 27.0246C3.37314 27.9083 3.07084 29.0251 3.21771 30.1295C3.32785 30.9577 3.82206 31.8053 4.81044 33.5C5.79884 35.1947 6.29305 36.0423 6.96257 36.5507C7.85524 37.2288 8.98347 37.528 10.099 37.3827C10.6083 37.3163 11.1246 37.1091 11.8368 36.7365C12.8835 36.1888 14.1353 36.167 15.1606 36.7529C16.1859 37.339 16.7926 38.423 16.8369 39.5944C16.867 40.3911 16.9439 40.9376 17.1405 41.4073C17.571 42.4363 18.397 43.2541 19.4365 43.6804C20.2161 44 21.2045 44 23.1814 44C25.1582 44 26.1466 44 26.9262 43.6804C27.9658 43.2541 28.7917 42.4363 29.2222 41.4073C29.4188 40.9376 29.4959 40.3912 29.526 39.5942C29.5702 38.423 30.1767 37.339 31.202 36.7529C32.2273 36.1668 33.479 36.1888 34.5258 36.7365C35.238 37.1091 35.7542 37.3161 36.2635 37.3825C37.379 37.528 38.5073 37.2288 39.3999 36.5507C40.0696 36.042 40.5637 35.1947 41.5521 33.4998C42.5405 31.8051 43.0346 30.9577 43.1449 30.1295C43.2917 29.0251 42.9893 27.9081 42.3045 27.0244C41.9917 26.621 41.5523 26.2819 40.8702 25.8577C39.8679 25.2342 39.2228 24.1718 39.2228 22.9998C39.2228 21.8278 39.8679 20.7658 40.8702 20.1423C41.5525 19.7179 41.9919 19.379 42.3047 18.9753C42.9896 18.0917 43.2919 16.9748 43.1451 15.8704C43.0348 15.0422 42.5407 14.1948 41.5523 12.5C40.5639 10.8052 40.0698 9.95784 39.4001 9.44927C38.5075 8.77115 37.3793 8.47188 36.2637 8.61729C35.7544 8.68365 35.238 8.89086 34.526 9.26348C33.4793 9.81114 32.2275 9.83304 31.2022 9.24702C30.1769 8.66101 29.5702 7.57689 29.5258 6.40567C29.4957 5.60881 29.4188 5.06249 29.2222 4.59272C28.7917 3.56362 27.9658 2.74598 26.9262 2.3197ZM23.1814 29.3C26.6961 29.3 29.5452 26.4795 29.5452 23C29.5452 19.5205 26.6961 16.7 23.1814 16.7C19.6666 16.7 16.8175 19.5205 16.8175 23C16.8175 26.4795 19.6666 29.3 23.1814 29.3Z`}
                          fill={`#008BE8`}
                        />
                      </svg>
                    </div>
                    <span
                      className={`${styles['font-Gilroy']} font-semibold desktop:text-[36px] laptop:text-[32px] phone:text-[28px] nokia:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] phone:leading-[33px] nokia:leading-[28px] leading-[23.86px] pr-1`}
                    >
                      Большой функционал
                    </span>
                  </li>
                  <li className={`bg-secondary-50 rounded-[20px] flex items-center p-2 gap-3`}>
                    <div
                      className={`rounded-[15px] flex-shrink-0 bg-white border-transparent border-8 nokia:w-[96px] nokia:h-[96px] w-[72px] h-[72px] flex items-center justify-center`}
                    >
                      <svg
                        className={`nokia:w-[48px] nokia:h-[48px] w-[36px] h-[36px]`}
                        width={`48`}
                        height={`48`}
                        viewBox={`0 0 48 48`}
                        fill={`none`}
                        xmlns={`http://www.w3.org/2000/svg`}
                      >
                        <path
                          d={`M40 27.5C40 26.6716 39.3284 26 38.5 26H32.5C31.6716 26 31 26.6716 31 27.5V41H28V8.5C28 7.04338 27.9968 6.10182 27.9036 5.40806C27.816 4.75744 27.6748 4.55352 27.5606 4.43934C27.4464 4.32516 27.2426 4.18394 26.592 4.09646C25.8982 4.00318 24.9566 4 23.5 4C22.0434 4 21.1018 4.00318 20.408 4.09646C19.7574 4.18394 19.5535 4.32516 19.4393 4.43934C19.3252 4.55352 19.1839 4.75744 19.0965 5.40806C19.0032 6.10182 19 7.04338 19 8.5V41H16V17.5C16 16.6716 15.3284 16 14.5 16H8.5C7.67158 16 7 16.6716 7 17.5V41H4H3.5C2.67158 41 2 41.6716 2 42.5C2 43.3284 2.67158 44 3.5 44H43.5C44.3284 44 45 43.3284 45 42.5C45 41.6716 44.3284 41 43.5 41H43H40V27.5Z`}
                          fill={`#008BE8`}
                        />
                      </svg>
                    </div>
                    <span
                      className={`${styles['font-Gilroy']} font-semibold desktop:text-[36px] laptop:text-[32px] phone:text-[28px] nokia:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] phone:leading-[33px] nokia:leading-[28px] leading-[23.86px] pr-1`}
                    >
                      Детальная аналитика
                    </span>
                  </li>
                </ul>
              </div>
              <div className={`${styles.container} container`}>
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[50px] text-[28px] tablet:text-[48px] nokia:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] text-black desktop:mb-[100px] laptop:mb-12 nokia:mb-9 mb-3`}
                >
                  Этой CRM <span className={`${styles.textBluesales}`}>пользуются</span>
                </h3>
                <div className={`flex flex-wrap gap-[24px] laptop:justify-start items-center justify-center`}>
                  <Image
                    width={203}
                    height={80}
                    loading={`lazy`}
                    src={`${SOURCE.static_url}logo1-1?field=slug`}
                    alt={`Фото image`}
                    className={`select-none desktop:max-w-[247px] laptop:max-w-[203px] phone:max-w-[247px] nokia:max-w-[154px] max-w-[110px]`}
                  />
                  <Image
                    width={354}
                    height={111}
                    loading={`lazy`}
                    src={`${SOURCE.static_url}logo2-1?field=slug`}
                    alt={`Фото image`}
                    className={`select-none desktop:max-w-[354px] nokia:max-w-[354px] max-w-[183px]`}
                  />
                  <Image
                    width={90}
                    height={54}
                    loading={`lazy`}
                    src={`${SOURCE.static_url}logo3-1?field=slug`}
                    alt={`Фото image`}
                    className={`select-none desktop:max-w-[354px] nokia:max-w-[354px] max-w-[183px]`}
                  />
                  <Image
                    width={186}
                    height={46}
                    loading={`lazy`}
                    src={`${SOURCE.static_url}logo4-1?field=slug`}
                    alt={`Фото image`}
                    className={`select-none desktop:max-w-[335px] nokia:max-w-[186px] max-w-[115px]`}
                  />

                  {/* <img className={`desktop:max-w-[247px] laptop:max-w-[203px] phone:max-w-[247px] nokia:max-w-[154px] max-w-[110px]` src={`./assets/images/logo/logo1.svg` alt={``}/> */}
                  {/* <img className={`desktop:max-w-[354px] nokia:max-w-[354px] max-w-[183px]` src={`./assets/images/logo/logo2.svg` alt={``}/> */}
                  {/* <img className={`desktop:max-w-[178px] nokia:max-w-[90px] max-w-[61px]` src={`./assets/images/logo/logo3.svg` alt={``}/> */}
                  {/* <img className={`desktop:max-w-[335px] nokia:max-w-[186px] max-w-[115px]` src={`./assets/images/logo/logo4.svg` alt={``}/> */}
                </div>
              </div>
            </div>
            <div className={`flex laptop:flex-row flex-col nokia:gap-5 gap-3 mt-5`}>
              <div className={`${styles.container}`}>
                <p
                  className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px]`}
                >
                  Как видите CRM подходит как для продажи услуг, так и для продажи товаров. Здесь также есть интеграция со СДЕК.
                </p>
                <p
                  className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px] mt-5`}
                >
                  Данную CRM используют большие и маленькие EdTech и e-com компании и не только.
                </p>
                <p
                  className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px] mt-5`}
                >
                  Она проста в установке и интуитивна понятна для работы ваших менеджеров
                </p>
              </div>
              <div className={`${styles.container}`}>
                <div className={`flex nokia:flex-col flex-col-reverse nokia:gap-6 gap-3`}>
                  <p
                    className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px]`}
                  >
                    Чтобы все работало, как часы и ваши менеджеры занимались только продажами, жмите на кнопку ниже.
                  </p>
                  <CallToActionButton color="blue" textClassName="p-0 !left-0" className={`phone:w-auto w-full max-w-full`}>
                    ОФОРМИТЬ ЗАКАЗ
                  </CallToActionButton>
                  {/* <button
                    className={`flex phone:w-auto w-full relative rounded-[999px] ${styles.bgBluesales} nokia:py-[34px] p-[30px] pl-[20px] nokia:pl-[48px] nokia:pr-[124px] desktop:mt-[68px] laptop:mt-[75px] mt-0`}
                  >
                    <span className={`text-start ${onest.className} font-medium desktop:text-[32px] text-[16px] text-white`}>ОФОРМИТЬ ЗАКАЗ</span>
                    <Image
                      width={335}
                      height={348}
                      loading={`lazy`}
                      src={`${SOURCE.static_url}btnicon?field=slug`}
                      alt={`Фото image`}
                      className={`select-none absolute -right-1 top-0 h-full`}
                    />
                    <img className={`absolute -right-1 top-0 h-full` src={`./assets/images/icons/btn_icon.svg` alt={``}/>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`mt-5`}>
          <div className={`${styles.container}`}>
            <h1
              className={`${styles['font-Gilroy']} font-semibold laptop:text-[63px] laptop:leading-[67.2px] tablet:text-[56px] text-[28px] phone:text-[48px] nokia:text-[36px]  tablet:leading-[58px] phone:leading-[50px] nokia:leading-[37px] leading-[29.9px] ${styles.textAccent}`}
            >
              отзывы
            </h1>
            <VideoCarousel />
            <TextCarousel />
          </div>
        </section>

        <section>
          <main className={`section p-5  pt-2 laptop:p-5 laptop:pl-[50px] laptop:pt-[70px] bg-transparent ${styles.screen}`}>
            <div className="flex gap-16 desktop:gap-10">
              <div className="flex laptop:items-start laptop:justify-center flex-col " style={{ flex: 1 }}>
                <h3
                  className={`${styles['font-Gilroy']} font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px] flex-wrap laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] text-black phone:mb-8 nokia:mb-6 mb-4`}
                >
                  <span className={`${styles.textBluesales}`}>Остались вопросы?</span> Нужна ли CRM, оставьте заявку с главной страницы?
                </h3>
                <p
                  className={`${onest.className} font-normal text-black desktop:text-desktop laptop:text-20px phone:text-[20px] nokia:text-[18px] text-[16px] desktop:leading-[32.4px] laptop:leading-[27px] phone:leading-[27px] nokia:leading-[23.4px] leading-[21.6px] phone:mb-12 mb-6`}
                >
                  Оставьте заявку на бесплатную консультацию, расскажите про свой проект и за 30 минут определимся нужно ли вам это или нет
                </p>

                <CallBackForm color="blue" className={`hidden laptop:block rounded-xl p-6 desktop:p-14 w-max ${styles.feedback}`} />
              </div>

              <aside
                className={`hidden laptop:ml-12 laptop:flex desktop:mb-5 desktop:pb-16 flex-1 w-[600px] bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 laptop:h-[980px] laptop:max-w-[777px] ${styles.aside}`}
              >
                <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={-90} />
                <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={-15} />
                <Tablet text={'Спикер конференции:\nСуровый Питерский SMM,\nсотрудничал с Senler'} icon={<WorkerMan />} margin={40} last />
              </aside>
            </div>

            <CallBackForm color="blue" className={`laptop:hidden rounded-xl mx-auto p-6 desktop:p-14 my-5 w-full max-w-[728px] ${styles.feedback}`} />

            <aside className={`flex laptop:hidden flex-1 h-[625px] w-full bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 ${styles.aside}`}>
              <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={40} color="blue" />
              <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={85} color="blue" />
              <Tablet text={'Спикер конференции:\nСуровый Питерский SMM,\nсотрудничал с Senler'} icon={<WorkerMan />} margin={120} color="blue" last />
            </aside>
          </main>
        </section>
      </main>
    </div>
  )
}
