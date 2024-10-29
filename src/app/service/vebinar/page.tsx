import { CallToActionButton } from '@/components/ui/CallToAction'
import { SOURCE } from '@/constants/static'
import { TextCarousel } from '@/modules/landing/FiveScreen/modules/TextCarousel'
import { VideoCarousel } from '@/modules/landing/FiveScreen/modules/VideoCarousel'
import Image from 'next/image'
import styles from './style.module.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Настройка и сопровождение вебинаров и вебинарных комнат по доступной цене',
  description: 'У вас скоро вебинар? Настроим вебинарную компанту и предоставим услуги по сопровождению всего вебинара. Получите персональное предложение уже сейчас!',
  keywords: 'настройка вебинаров, сопровождение вебинаров',
  openGraph: {
    title: 'Настройка и сопровождение вебинаров и вебинарных комнат по доступной цене',
    description: 'У вас скоро вебинар? Настроим вебинарную компанту и предоставим услуги по сопровождению всего вебинара. Получите персональное предложение уже сейчас!',
    url: 'https://chat-boty.com/service/vebinar',
  },
}

const Service = () => (
  <main className="overflow-hidden desktop:px-5 px-0">
    <section className="mb-5 mt-5">
      <div className={`${styles.container}`}>
        <div className="flex items-center w-full tablet:gap-x-9 gap-x-0 phone:gap-y-12 gap-y-9 laptop:flex-row phone:flex-col-reverse flex-col">
          <div className="max-w-[1000px]">
            <h1 className="font-bold desktop:text-8xl laptop:text-[88px] tablet:text-[72px] phone:text-[48px] text-[36px] desktop:leading-[100px] laptop:leading-[92px] tablet:leading-[75px] phone:leading-[50.4px] leading-[37.8px] text-black uppercase text-center phone:text-start">
              Настройка
              <br className="phone:hidden block" /> и сопровождение
              <br className="phone:hidden block" /> вебинаров
              <br className="phone:hidden block" /> и вебинарных комнат
            </h1>
            <p
              className="font-Onest font-medium desktop:text-[32px] laptop:text-[28px] tablet:text-[24px] phone:text-[20px] text-[16px]
              desktop:leading-[38px] laptop:leading-[29.4px] tablet:leading-[25.2px] phone:leading-[21px] leading-[16px] mt-[24px] tablet:mb-[48px] mb-[20px] text-center phone:text-start"
            >
              Полное техническое сопровождение вашей трансляции
            </p>
            <CallToActionButton color="yellow" textClassName="p-0 !left-0" className={`tablet:w-auto w-full max-w-full`}>
              ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
            </CallToActionButton>

            {/* <button className={`flex tablet:w-auto w-full relative rounded-[999px] ${styles.bgAccent} phone:py-[34px] p-[20px] pl-[20px] phone:pl-[48px] phone:pr-[124px]`}>
              <span className="text-start font-Onest font-normal desktop:text-desktop phone:text-laptop text-xs text-black">ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</span>
            </button> */}
          </div>
          <div className="max-w-[704px]">
            {/* <MainImage image={'webinarhomeimg'} width={1400} height={650} /> */}
            <Image width={1400} height={650} loading="lazy" src={`${SOURCE.static_url}webinarhomeimg?field=slug`} alt={`Фото image`} className="ml-auto select-none" />
          </div>
        </div>
      </div>
    </section>

    <section className="mb-5">
      <div className={`${styles.container}`}>
        <div className="flex laptop:flex-row flex-col items-center gap-9">
          <div className="desktop:w-[704px] laptop:w-[522px] w-full flex-shrink-0">
            {/* <MainImage image={'onlinewebinar'} width={100} height={100} /> */}
            <Image width={704} height={528} loading="lazy" src={`${SOURCE.static_url}onlinewebinar?field=slug`} alt={`Фото image`} className="w-full select-none" />

            {/* <img className="w-full" src="./assets/images/online_webinar.png" alt=""/> */}
          </div>
          <div className="desktop:max-w-[1000px] w-full">
            <h3 className="font-Gilroy font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] phone:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] phone:leading-[37px] leading-[29.9px] text-black">
              Вебинар — основной инструмент продаж онлайн-школ.
            </h3>
            <p
              className="font-Onest font-normal text-black mt-6 desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
              desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px]"
            >
              Не стоит рисковать и проводить самому вебинар, если у вас мало опыта. Вы рискуете большим количеством времени и ресурсами, трансляция может упасть, либо пропадёт
              презентация и всё на смарку…
            </p>
            <p
              className="font-Onest font-normal text-black mt-4 desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
              desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px]"
            >
              Мы же всё настроим, подготовим и сопроводим, даже если трансляция упадёт, мы восстановим её за считанные минуты.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-5">
      <div className={`${styles.container}`}>
        <h3 className="font-Gilroy font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] phone:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] phone:leading-[37px] leading-[29.9px] text-black">
          Что мы делаем?
        </h3>
        <p
          className="max-w-[1148px] font-Onest font-medium text-black mt-5 phone:mb-9 mb-5 desktop:text-[32px] laptop:text-[28px] tablet:text-[24px] phone:text-[20px] text-[16px]
          desktop:leading-[38px] laptop:leading-[29px] tablet:leading-[25px] phone:leading-[21px] leading-[16px]"
        >
          Мы выделяем специалиста, который проводит подготовительную работу, а также мониторинг вашего вебинара.
        </p>
        <div className="laptop:flex block gap-[12px] flex-wrap">
          <div className="rounded-laptop bg-card-bg px-6 py-12 text-center laptop:max-w-[calc(100%_/_3_-_8px)] max-w-full laptop:mb-0 mb-3">
            <Image width={1400} height={650} loading="lazy" src={`${SOURCE.static_url}doing1?field=slug`} alt={`Фото image`} className="ml-auto mb-9 select-none" />
            <h6 className="font-Gilroy font-semibold mb-3 desktop:text-[36px] laptop:text-[30px] tablet:text-[28px] phone:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] tablet:leading-[33px] phone:leading-[28px] leading-[23.86px]">
              Предварительная настройка программ
            </h6>
            <p
              className="font-Onest font-normal text-black desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
              desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px]"
            >
              Помогаем настроить вам OBS: настройка сцены, подключение камеры телефона, если 2 устройства, настраиваем трансляцию на Ютуб/ZOOM
            </p>
          </div>
          <div className="rounded-laptop bg-card-bg px-6 py-12 text-center laptop:max-w-[calc(100%_/_3_-_8px)] max-w-full laptop:mb-0 mb-3">
            {/* <img className="mb-9 w-full" src="./assets/images/doing2.png" alt="" /> */}
            <Image width={1400} height={650} loading="lazy" src={`${SOURCE.static_url}doing2?field=slug`} alt={`Фото image`} className="ml-auto mb-9 select-none" />
            <h6 className="font-Gilroy font-semibold mb-3 desktop:text-[36px] laptop:text-[30px] tablet:text-[28px] phone:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] tablet:leading-[33px] phone:leading-[28px] leading-[23.86px]">
              Предварительная настройка программ
            </h6>
            <p
              className="font-Onest font-normal text-black desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
              desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px]"
            >
              Создание и оформление страницы регистрации, проверка трансляции на Bizon365/GetCourse, загружаем баннеры, создаём кнопки ссылки.
            </p>
          </div>
          <div className="rounded-laptop bg-card-bg px-6 py-12 text-center laptop:max-w-[calc(100%_/_3_-_8px)] max-w-full">
            <Image width={1400} height={650} loading="lazy" src={`${SOURCE.static_url}doing3?field=slug`} alt={`Фото image`} className="ml-auto w-auto mb-9 select-none" />
            {/* <img className="mb-9 w-full" src="./assets/images/doing3.png" alt="" /> */}
            <h6 className="font-Gilroy font-semibold mb-3 desktop:text-[36px] laptop:text-[30px] tablet:text-[28px] phone:text-[24px] text-[20px] desktop:leading-[42.95px] laptop:leading-[38px] tablet:leading-[33px] phone:leading-[28px] leading-[23.86px]">
              Техподдержка во время эфира
            </h6>
            <p
              className="font-Onest font-normal text-black desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
              desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px]"
            >
              Мониторим видео потоки спикера, наблюдаем за трансляцией и в случае неполадок решаем их.
            </p>
          </div>
        </div>
        <p
          className="font-Onest phone:mt-9 mt-5 font-normal text-black desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
          desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px]"
        >
          В результате вы можете сосредоточиться на контенте вебинара и продажах, не опасаясь за неполадки в технической части.
        </p>
      </div>
    </section>

    <section className="mt-5">
      <div className={`${styles.container}`}>
        <h3 className="font-Gilroy font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] phone:text-[36px] laptop:leading-[58px] tablet:leading-[50px] phone:leading-[37px] leading-[29.9px] text-black phone:mb-[70px] mb-[20px] text-center">
          На каких площадках
        </h3>
        <div className="flex items-center justify-center flex-wrap tablet:gap-x-[64px] gap-x-[32px] tablet:gap-y-[32px] gap-y-[20px]">
          <a href="#" className="tablet:max-w-max max-w-[153px]">
            <Image width={395} height={49} loading="lazy" src={`${SOURCE.static_url}logo1?field=slug`} alt={`Фото image`} className="select-none" />
          </a>
          <a href="#" className="tablet:max-w-max max-w-[82px]">
            <Image width={149} height={107} loading="lazy" src={`${SOURCE.static_url}logo2?field=slug`} alt={`Фото image`} className="select-none" />
          </a>
          <a href="#" className="tablet:max-w-max max-w-[202px]">
            <Image width={480} height={83} loading="lazy" src={`${SOURCE.static_url}logo3?field=slug`} alt={`Фото image`} className="select-none" />
          </a>
          <a href="#" className="tablet:max-w-max max-w-[124px]">
            <Image width={308} height={69} loading="lazy" src={`${SOURCE.static_url}logo4?field=slug`} alt={`Фото image`} className="select-none" />
          </a>
          <a href="#" className="tablet:max-w-max max-w-[210px]">
            <Image width={383} height={107} loading="lazy" src={`${SOURCE.static_url}logo5?field=slug`} alt={`Фото image`} className="select-none" />
          </a>
          <a href="#" className="tablet:max-w-max max-w-[170px]">
            <Image width={358} height={93} loading="lazy" src={`${SOURCE.static_url}logo6?field=slug`} alt={`Фото image`} className="select-none" />
          </a>
        </div>
        <p
          className="font-Onest font-normal text-black desktop:text-desktop laptop:text-20px tablet:text-[20px] phone:text-[18px] text-[16px]
          desktop:leading-[32.4px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[23.4px] leading-[21.6px] text-center phone:mt-[70px] mt-[20px]"
        >
          Если у вас другая площадка — протестируем бесплатно и организуем эфир.
        </p>
      </div>
    </section>

    <section className="mt-5">
      <div className={`${styles.container}`}>
        <div className="flex desktop:gap-9 gap-6 flex-col laptop:flex-row">
          <div className="max-w-[1156px] flex flex-col desktop:gap-9 gap-6">
            <div className="phone:bg-secondary-50 bg-transparent phone:text-left text-center rounded-[12px]  desktop:p-12 phone:p-6 p-5">
              <h3 className="font-Gilroy font-semibold desktop:text-[64px] desktop:leading-[67.2px] laptop:text-[56px] tablet:text-[48px] phone:text-[36px] text-[28px] laptop:leading-[58px] tablet:leading-[50px] phone:leading-[37px] leading-[29.9px] text-primary">
                Сколько стоит сопровождение вебинаров?
              </h3>
            </div>
            <div className="bg-secondary-50 rounded-[12px]  desktop:p-12 phone:p-6 p-5">
              <div className="flex justify-between items-start gap-4 tablet:flex-row flex-col tablet:mb-0 mb-6">
                <div>
                  <h6 className="font-Gilroy font-semibold desktop:text-[36px] desktop:leading-[42px] laptop:text-[32px] tablet:text-[28px] phone:text-[24px] text-[20px] laptop:leading-[38px] tablet:leading-[33.4px] phone:leading-[28px] leading-[23.86px]">
                    Стоимость услуги
                  </h6>
                  <ul className="phone:my-6 my-3 list-disc pl-6">
                    <li className="font-Onest font-normal desktop:text-[24px] desktop:leading-[32px] laptop:text-[20px] tablet:text-[20px] phone:text-[18px] text-[16px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[24px] leading-[21px] text-primary">
                      1 час на подготовку
                    </li>
                    <li className="font-Onest font-normal desktop:text-[24px] desktop:leading-[32px] laptop:text-[20px] tablet:text-[20px] phone:text-[18px] text-[16px] laptop:leading-[27px] tablet:leading-[27px] phone:leading-[24px] leading-[21px] text-primary">
                      2 часа мониторинга на самом вебинаре
                    </li>
                  </ul>
                  <p className="font-normal font-Onest desktop:text-tablet text-secondary desktop:mb-[100px] laptop:mb-[48px] tablet:mb-[24px] mb-0">
                    *Каждый следующий час оплачивается дополнительно
                  </p>
                </div>
                <div className={`desktop:py-6 py-4 desktop:px-9 px-6 ${styles.bgAccent} whitespace-nowrap`}>
                  <h5 className="font-Gilroy font-semibold desktop:text-[64px] laptop:text-[56px] tablet:text-[48px] phone:text-[36px] text-[28px] desktop:leading-[67.2px] laptop:leading-[58px] tablet:leading-[50px] phone:leading-[37.8px] leading-[29.4px] mb-3">
                    10 000 ₽
                  </h5>
                  <h6 className="font-Onest font-medium desktop:text-[28px] desktop:leading-[29.4px] text-secondary">4 500 ₽/час*</h6>
                </div>
              </div>
              <CallToActionButton color="yellow" textClassName="p-0 !left-0" className={`tablet:w-auto w-full max-w-full`}>
                ОФОРМИТЬ ЗАКАЗ
              </CallToActionButton>

              {/* <button className="flex tablet:w-auto w-full relative rounded-[999px] bg-accent phone:py-[34px] p-[20px] pl-[20px] phone:pl-[48px] phone:pr-[124px]">
                <span className="text-start font-Onest font-medium desktop:text-[32px] text-[16px] text-black">ОФОРМИТЬ ЗАКАЗ</span>
                <img className="absolute -right-1 top-0 h-full" src="./assets/images/icons/btn_icon.svg" alt="" />
              </button> */}
            </div>
          </div>
          <div className="laptop:max-w-[556px] max-w-full bg-secondary-50 rounded-[12px] desktop:p-12 phone:p-6 p-5">
            {/* <img className="w-full" src="./assets/images/support_img.png" alt="" /> */}
            <Image width={508} height={348} loading="lazy" src={`${SOURCE.static_url}supportimg?field=slug`} alt={`Фото image`} className="select-none w-full" />

            <p className="font-normal font-Onest desktop:text-desktop text-black mt-6">
              Перед оплатой дождитесь консультации со специалистом. Необходимо убедиться, что мы сможем помочь с сопровождением в нужную вам дату и время.
            </p>
            <p className="font-normal font-Onest desktop:text-desktop text-black mt-6">Поэтому укажите как можно точнее эти сведения, когда будете заполнять форму заявки.</p>
          </div>
        </div>
      </div>
    </section>

    <section className={`mt-5`}>
      <div className={`${styles.container}`}>
        <h1
          className={`font-Gilroy font-semibold desktop:text-[63px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] phone:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] phone:leading-[37px] leading-[29.9px] ${styles.textAccent}`}
        >
          отзывы
        </h1>
        <VideoCarousel />
        <TextCarousel />
      </div>
    </section>
  </main>
)

export default Service
