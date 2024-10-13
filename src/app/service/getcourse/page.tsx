import Image from 'next/image'

import { CallToActionButton } from '@/components/ui/CallToAction'
import { SOURCE } from '@/constants/static'
import { TextCarousel } from '@/modules/landing/FiveScreen/modules/TextCarousel'
import { VideoCarousel } from '@/modules/landing/FiveScreen/modules/VideoCarousel'
import './style.css'
import styles from './style.module.css'

import Chart from '@/constants/svg/Chart'
import Diplomat from '@/constants/svg/Diplomat'
import WorkerMan from '@/constants/svg/WorkerMan'
import { Tablet } from '@/modules/landing/SevenScreen/AnimatedTablet'
import { CallBackForm } from '@/modules/landing/SevenScreen/CallBackForm'

import { Onest } from 'next/font/google'

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  return (
    <>
      <div className="overflow-hidden">
        <main>
          <section className="mb-5 mt-5">
            <div className={`${styles.container} relative`}>
              <div className="flex items-center w-full tablet:gap-x-9 gap-x-0 laptop:flex-row flex-col nokia:gap-y-12 gap-y-9">
                <div className="desktop:max-w-[780px] w-full z-[2] relative">
                  <h1 className="font-normal font-IgraSans desktop:text-[64px] laptop:text-[64px] phone:text-[64px] nokia:text-[39px] text-[30px] desktop:leading-[76px] laptop:leading-[76px] phone:leading-[76px] nokia:leading-[46.4px] leading-[36.8px] text-black uppercase desktop:text-left tablet:text-center">
                    Трансформируем онлайн-школу
                    <br />
                    <span className={`${styles.textPink} no-underline`}>
                      Н <span className="relative phone:-left-4 -left-2">А</span> GetCourse
                    </span>
                  </h1>
                  <p
                    className={`${onest.className} font-medium desktop:text-[29px] laptop:text-[28px] tablet:text-[24px] nokia:text-[20px] text-[16px] desktop:leading-[44px] laptop:leading-[29.4px] tablet:leading-[25.2px] nokia:leading-[21px] leading-[16px] mt-[24px] phone:mb-[48px] mb-[20px] desktop:text-left tablet:text-center`}
                  >
                    Оформление и настройка от А до Я, освободим вам время для более важных задач
                    <br className="tablet:hidden block" />
                  </p>
                  <CallToActionButton textClassName="p-0 !left-0 " className={`tablet:w-auto w-full max-w-full`}>
                    ОСТАВИТЬ ЗАЯВКУ
                  </CallToActionButton>
                </div>
                <div className="desktop:max-w-[884px] w-full">
                  <Image width={1330} height={731} loading={`lazy`} src={`${SOURCE.static_url}homeimg-1?field=slug`} alt={`Фото image`} className={`select-none w-full`} />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className={`${styles.container}`}>
              <h3 className="font-IgraSans font-normal desktop:text-[56px] desktop:leading-[67.2px] laptop:text-[56px] text-[28px] tablet:text-[48px] nokia:text-[36px]  laptop:leading-[58px] tablet:leading-[50px] nokia:leading-[37px] leading-[29.9px] text-black-dark nokia:mb-3 mb-2 uppercase">
                Что мы делаем:
              </h3>
              <p className="font-Manrope font-medium text-black desktop:text-[29px] laptop:text-[29px] phone:text-[29px] nokia:text-[29px] text-[18] desktop:leading-[44px] laptop:leading-[44px] phone:leading-[44px] nokia:leading-[44px] leading-[27.6px] desktop:mb-[54px] nokia:mb-[25px] mb-[16px]">
                Базовая настройка Геткурс:
              </p>
              <div className="flex flex-col desktop:gap-y-[51px] laptop:gap-y-[33px] phone:gap-y-[41px] nokia:gap-y-[27px] gap-y-[20px] desktop:mb-[54px] nokia:mb-[25px] mb-[16px]">
                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[461px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M31.4142 2.70697C30.5047 2.33398 29.3515 2.33398 27.0452 2.33398C24.7389 2.33398 23.5857 2.33398 22.6762 2.70697C21.4634 3.2043 20.4998 4.15821 19.9975 5.35883C19.7681 5.90692 19.6784 6.54431 19.6433 7.47406C19.5917 8.8404 18.8839 10.1051 17.6878 10.7888C16.4916 11.4724 15.0314 11.4469 13.8103 10.8079C12.9794 10.3732 12.3769 10.1314 11.7828 10.054C10.4812 9.88435 9.16498 10.2335 8.12353 11.0246C7.34242 11.618 6.76585 12.6066 5.61271 14.5838C4.45958 16.5611 3.88303 17.5497 3.75452 18.516C3.58316 19.8044 3.93586 21.1075 4.73501 22.1386C5.09977 22.6092 5.61239 23.0046 6.40801 23.4995C7.57765 24.2272 8.33023 25.4666 8.33016 26.834C8.33009 28.2013 7.57753 29.4405 6.40801 30.1679C5.61227 30.6631 5.09955 31.0588 4.73477 31.5294C3.93561 32.5604 3.58294 33.8633 3.75428 35.1517C3.88278 36.118 4.45936 37.1068 5.61247 39.084C6.7656 41.0611 7.34218 42.0499 8.12328 42.6431C9.16473 43.4342 10.481 43.7833 11.7825 43.6138C12.3766 43.5364 12.979 43.2946 13.8099 42.8599C15.0311 42.221 16.4914 42.1955 17.6876 42.879C18.8838 43.5628 19.5916 44.8275 19.6433 46.1941C19.6784 47.1237 19.7681 47.7611 19.9975 48.3092C20.4998 49.5097 21.4634 50.4637 22.6762 50.9611C23.5857 51.334 24.7389 51.334 27.0452 51.334C29.3515 51.334 30.5047 51.334 31.4142 50.9611C32.627 50.4637 33.5906 49.5097 34.0929 48.3092C34.3223 47.7611 34.4122 47.1237 34.4473 46.1939C34.4989 44.8275 35.2065 43.5628 36.4026 42.879C37.5988 42.1952 39.0592 42.221 40.2804 42.8599C41.1113 43.2946 41.7135 43.5361 42.3077 43.6135C43.6092 43.7833 44.9254 43.4342 45.9668 42.6431C46.7481 42.0497 47.3246 41.0611 48.4777 39.0837C49.6309 37.1066 50.2073 36.118 50.336 35.1517C50.5072 33.8633 50.1545 32.5601 49.3555 31.5292C48.9906 31.0585 48.478 30.6628 47.6822 30.1679C46.5128 29.4405 45.7603 28.2011 45.7603 26.8337C45.7603 25.4664 46.5128 24.2274 47.6822 23.5C48.4782 23.0049 48.9908 22.6094 49.3558 22.1386C50.1548 21.1077 50.5075 19.8046 50.3363 18.5162C50.2076 17.5498 49.6311 16.5612 48.478 14.584C47.3248 12.6068 46.7484 11.6181 45.9671 11.0248C44.9257 10.2337 43.6094 9.88452 42.3079 10.0542C41.7138 10.1316 41.1113 10.3733 40.2806 10.808C39.0594 11.447 37.599 11.4725 36.4029 10.7888C35.2067 10.1052 34.4989 8.84035 34.447 7.47394C34.4119 6.54426 34.3223 5.90689 34.0929 5.35883C33.5906 4.15821 32.627 3.2043 31.4142 2.70697ZM27.0452 34.184C31.1457 34.184 34.4696 30.8934 34.4696 26.834C34.4696 22.7746 31.1457 19.484 27.0452 19.484C22.9447 19.484 19.6207 22.7746 19.6207 26.834C19.6207 30.8934 22.9447 34.184 27.0452 34.184Z"
                        fill="#525050"
                      />
                    </svg>
                    <div>
                      <span className="font-Manrope font-medium text-secondary desktop:text-[18px] phone:text-[24px] nokia:text-[11px] text-[8.9px] desktop:leading-[21px] phone:leading-[21px] nokia:leading-[14px] leading-[10.24px]">
                        01
                      </span>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        Работа с доменом:
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Подключение и настройка домена
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Настройка доменной почты</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Настройка адресов входящей и исходящей почты
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Настройка защиты репутации домена (FBL)
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Создание шаблонов рассылок и универсальной подписи
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="desktop:max-w-[1243px] w-full phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block1?field=slug`} alt={`Фото image`} className={`select-none`} />
                  </div>
                </div>

                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col-reverse nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[1243px] w-full phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block2?field=slug`} alt={`Фото image`} className={`select-none`} />
                  </div>
                  <div className="desktop:max-w-[461px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M38.9663 44.3135V47.2491C38.9663 48.2152 38.1641 48.9993 37.1756 48.9993C36.1871 48.9993 35.3849 48.2152 35.3849 47.2491V44.3321H38.3694C38.57 44.3321 38.7681 44.3251 38.9663 44.3135Z"
                        fill="#525050"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.3849 44.3321L19.2686 44.3321C14.3239 44.3321 10.3151 40.414 10.3151 35.5811V28.3889L23.9579 35.7561C26.9137 37.3523 30.7243 37.3523 33.6802 35.7561L35.3849 34.8367L35.3849 44.3321ZM38.9663 32.9021L47.3229 28.3889V35.5811C47.3229 40.218 43.634 44.0124 38.9663 44.3135L38.9663 32.9021Z"
                        fill="#525050"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M35.3849 32.1693L32.5246 33.7142C30.2707 34.9323 27.3674 34.9323 25.1135 33.7142L5.26298 22.9936C3.9116 22.2632 3.15234 20.9844 3.15234 19.6472C3.15234 18.3077 3.9116 17.0289 5.26298 16.3008L25.1135 5.57787C27.3674 4.36206 30.2707 4.36206 32.5246 5.57787L52.375 16.3008C53.7264 17.0289 54.4857 18.3077 54.4857 19.6472C54.4857 20.9844 53.7264 22.2632 52.375 22.9936L38.9663 30.2348V28.5803C38.9663 28.1159 38.7777 27.6702 38.441 27.3434L30.0844 19.1758C29.3873 18.4921 28.2508 18.4921 27.5536 19.1758C26.854 19.8572 26.854 20.968 27.5536 21.6494L35.3849 29.306V32.1693Z"
                        fill="#525050"
                      />
                    </svg>
                    <div>
                      <span className="font-Manrope font-medium text-secondary desktop:text-[18px] phone:text-[24px] nokia:text-[11px] text-[8.9px] desktop:leading-[21px] phone:leading-[21px] nokia:leading-[14px] leading-[10.24px]">
                        02
                      </span>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        Работа с тренингом:
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Создание продуктов и предложений
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Создание тренингов</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[461px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.63598 41.8712C8.63598 41.8783 8.63598 41.8916 8.62783 41.9099C8.63089 41.8977 8.63292 41.8844 8.63598 41.8712Z" fill="#525050" />
                      <path
                        d="M48.1605 43.5827C47.8175 43.5753 47.4789 43.5046 47.1616 43.3743L41.2474 41.2775L41.2037 41.2598C41.0747 41.206 40.9361 41.1791 40.7964 41.1806C40.6676 41.1807 40.5399 41.204 40.4194 41.2493C40.2756 41.3035 38.9809 41.79 37.6227 42.1629C36.8863 42.365 34.3229 43.0243 32.2658 43.0243C27.0078 43.0243 22.0915 41.0035 18.424 37.3337C16.6324 35.553 15.2118 33.4345 14.2443 31.1009C13.2769 28.7674 12.7819 26.2651 12.788 23.7389C12.7879 22.4227 12.9297 21.1102 13.2109 19.8244C14.1264 15.5931 16.5513 11.7441 20.0385 8.99102C23.6157 6.18481 28.0318 4.66168 32.5783 4.66602C38.0164 4.66602 43.0838 6.74936 46.8481 10.5181C50.4062 14.0879 52.356 18.7816 52.3404 23.7337C52.3373 27.4135 51.2386 31.009 49.1844 34.0618L49.1646 34.091L49.0875 34.1952C49.0698 34.2191 49.0521 34.2421 49.0354 34.266L49.0198 34.2941C48.9784 34.3646 48.9408 34.4373 48.9073 34.5118L50.5468 40.3389C50.6193 40.5793 50.6585 40.8285 50.6634 41.0796C50.6638 41.4084 50.5994 41.7341 50.4738 42.0379C50.3481 42.3418 50.1638 42.6179 49.9313 42.8504C49.6988 43.083 49.4227 43.2673 49.1188 43.393C48.815 43.5186 48.4893 43.5831 48.1605 43.5827Z"
                        fill="#525050"
                      />
                      <path
                        d="M33.575 45.6441C33.4674 45.4348 33.316 45.2511 33.131 45.1055C32.9461 44.9599 32.732 44.8558 32.5032 44.8004C31.9012 44.641 31.1992 44.6681 30.6627 44.6285C25.5978 44.2763 20.8316 42.1025 17.2449 38.5087C14.0564 35.3378 11.9841 31.2167 11.3401 26.766C11.1943 25.7514 11.1943 25.4994 11.1943 25.4994C11.1943 25.1608 11.0911 24.8304 10.8987 24.5519C10.7062 24.2735 10.4335 24.0602 10.1168 23.9406C9.80021 23.8209 9.45465 23.8005 9.12614 23.8821C8.79763 23.9637 8.50175 24.1434 8.27786 24.3973C8.27786 24.3973 7.45709 25.291 7.06961 26.1879C5.9829 28.6919 5.51946 31.4221 5.71901 34.1445C5.91856 36.8669 6.77515 39.5004 8.21537 41.8191C8.48618 42.2702 8.48618 42.4785 8.42577 42.9473C8.14141 44.4171 7.64353 47.0098 7.38418 48.3545C7.2983 48.7907 7.33025 49.2418 7.47671 49.6614C7.62318 50.0811 7.87887 50.4541 8.21745 50.7421L8.26536 50.7827C8.71326 51.1384 9.26828 51.3323 9.84025 51.3327C10.162 51.333 10.4806 51.2696 10.7777 51.1462L16.3513 48.9952C16.5432 48.9222 16.7551 48.9222 16.947 48.9952C19.1417 49.8118 21.4259 50.2452 23.5903 50.2452C26.2872 50.2477 28.9513 49.6552 31.3929 48.5098C31.9616 48.2431 32.8511 47.9535 33.3719 47.3514C33.569 47.1179 33.6933 46.8317 33.7294 46.5282C33.7655 46.2248 33.7118 45.9174 33.575 45.6441Z"
                        fill="#525050"
                      />
                    </svg>
                    <div>
                      <span className="font-Manrope font-medium text-secondary desktop:text-[18px] phone:text-[24px] nokia:text-[11px] text-[8.9px] desktop:leading-[21px] phone:leading-[21px] nokia:leading-[14px] leading-[10.24px]">
                        03
                      </span>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        Настройки тренинга
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Ведущий</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Расписание</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Аватар в приложении</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Настройки чата, ответов, заданий, комментариев, тестирования, сертификатов
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="desktop:max-w-[1243px] w-full phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block3?field=slug`} alt={`Фото image`} className={`select-none`} />
                  </div>
                </div>

                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col-reverse nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[1243px] w-full phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block4?field=slug`} alt={`Фото image`} className={`select-none`} />
                  </div>
                  <div className="desktop:max-w-[461px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.66699 18.6673C4.66699 13.5127 8.84566 9.33398 14.0003 9.33398H42.0003C47.1549 9.33398 51.3337 13.5127 51.3337 18.6673V19.834C51.3337 20.4783 50.8112 21.0007 50.167 21.0007H5.83366C5.18933 21.0007 4.66699 20.4783 4.66699 19.834V18.6673ZM5.83366 25.6673C5.18933 25.6673 4.66699 26.1898 4.66699 26.834V37.334C4.66699 42.4886 8.84566 46.6673 14.0003 46.6673H42.0003C47.1549 46.6673 51.3337 42.4886 51.3337 37.334V26.834C51.3337 26.1898 50.8112 25.6673 50.167 25.6673H5.83366ZM30.3337 35.0007C30.3337 33.712 31.3783 32.6673 32.667 32.6673H39.667C40.9557 32.6673 42.0003 33.712 42.0003 35.0007C42.0003 36.2894 40.9557 37.334 39.667 37.334H32.667C31.3783 37.334 30.3337 36.2894 30.3337 35.0007Z"
                        fill="#525050"
                      />
                    </svg>

                    <div>
                      <span className="font-Manrope font-medium text-secondary desktop:text-[18px] phone:text-[24px] nokia:text-[11px] text-[8.9px] desktop:leading-[21px] phone:leading-[21px] nokia:leading-[14px] leading-[10.24px]">
                        04
                      </span>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        Подключение и настройка платёжной системы
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          -Подключаем все платёжные системы: robokassa, cloudpayments, GC pay и пр.
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          Настраиваем рекурентные платежи, подключаем рассрочки, кредиты
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-Manrope font-medium text-black desktop:text-[29px] laptop:text-[29px] phone:text-[29px] nokia:text-[29px] text-[18] desktop:leading-[44px] laptop:leading-[44px] phone:leading-[44px] nokia:leading-[44px] leading-[27.6px] desktop:mb-[54px] nokia:mb-[25px] mb-[16px]">
                Оформление Геткурс:
              </p>
              <div className="flex flex-col desktop:gap-y-[51px] laptop:gap-y-[33px] phone:gap-y-[41px] nokia:gap-y-[27px] gap-y-[20px]">
                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[461px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M51.3337 27.9993C51.3337 40.8859 40.8869 51.3327 28.0003 51.3327C15.1137 51.3327 4.66699 40.8859 4.66699 27.9993C4.66699 15.1127 15.1137 4.66602 28.0003 4.66602C40.8869 4.66602 51.3337 15.1127 51.3337 27.9993Z"
                        fill="#525050"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28 16.916C28.9665 16.916 29.75 17.6995 29.75 18.666V27.2744L35.0707 32.5953C35.7541 33.2787 35.7541 34.3866 35.0707 35.07C34.3873 35.7535 33.2794 35.7535 32.596 35.07L26.7626 29.2367C26.4343 28.9086 26.25 28.4634 26.25 27.9993V18.666C26.25 17.6995 27.0335 16.916 28 16.916Z"
                        fill="white"
                      />
                    </svg>
                    <div>
                      <span className="font-Manrope font-medium text-secondary desktop:text-[18px] phone:text-[24px] nokia:text-[11px] text-[8.9px] desktop:leading-[21px] phone:leading-[21px] nokia:leading-[14px] leading-[10.24px]">
                        01
                      </span>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        что входит в оформление геткурс:
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Страница входа</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Боковое меню</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Тренинги</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Уроки в тренингах</li>
                        <p className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px] mt-2">
                          *Можем написать на HTML и CSS оформление под вас, с эффектами при наведении и многим многим прочим
                        </p>
                      </ul>
                    </div>
                  </div>
                  <div className="desktop:max-w-[1243px] w-full phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px] flex phone:gap-x-4 gap-x-2">
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block5?field=slug`} alt={`Фото image`} className={`select-none phone:w-1/2 w-full`} />
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block7?field=slug`} alt={`Фото image`} className={`select-none phone:w-1/2 w-full`} />
                  </div>
                </div>

                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col-reverse nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[1243px] w-full phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <Image width={1242} height={499} loading={`lazy`} src={`${SOURCE.static_url}block6?field=slug`} alt={`Фото image`} className={`select-none`} />
                  </div>
                  <div className="desktop:max-w-[461px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.0655 51.3327C31.816 51.3325 31.5681 51.2859 31.3315 51.1947L23.5391 48.2029C23.0757 48.0232 22.6732 47.6795 22.3887 47.2208C22.1042 46.762 21.9522 46.2115 21.9544 45.6474V32.2745C21.9523 32.2691 21.9493 32.2641 21.9457 32.2599L5.54923 10.2234C5.18565 9.73467 4.95126 9.13583 4.87387 8.49797C4.79648 7.86012 4.87935 7.21004 5.11264 6.62491C5.34593 6.03978 5.71983 5.54418 6.18997 5.19695C6.6601 4.84972 7.20671 4.66545 7.76491 4.66602H48.5932C49.1514 4.66545 49.698 4.84972 50.1681 5.19695C50.6382 5.54418 51.0121 6.03978 51.2454 6.62491C51.4787 7.21004 51.5616 7.86012 51.4842 8.49797C51.4068 9.13583 51.1724 9.73467 50.8088 10.2234L34.4075 32.2622C34.4042 32.2667 34.4013 32.2716 34.3988 32.2767V48.6404C34.3997 48.9942 34.34 49.3448 34.223 49.6719C34.1061 49.999 33.9342 50.2962 33.7174 50.5464C33.5005 50.7966 33.243 50.9949 32.9595 51.1298C32.676 51.2648 32.3721 51.3337 32.0655 51.3327Z"
                        fill="#525050"
                      />
                    </svg>
                    <div>
                      <span className="font-Manrope font-medium text-secondary desktop:text-[18px] phone:text-[24px] nokia:text-[11px] text-[8.9px] desktop:leading-[21px] phone:leading-[21px] nokia:leading-[14px] leading-[10.24px]">
                        02
                      </span>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        процессы:
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Автоматизация на процессах
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Создание чат-ботов в ТГ/ВК
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Создание клуба по подписке
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Обработка неоплаченных заказов
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex desktop:gap-x-9 phone:gap-x-4 gap-x-2 laptop:flex-row flex-col nokia:gap-y-4 gap-y-2">
                  <div className="desktop:max-w-[885px] w-full flex flex-col justify-between phone:p-[44px] bg-bg-color desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px]">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M46.79 9.33398H10.04C8.41612 9.33567 6.85921 9.96197 5.71093 11.0755C4.56264 12.1889 3.91678 13.6987 3.91504 15.2734V40.7279C3.91678 42.3026 4.56264 43.8124 5.71093 44.9259C6.85921 46.0393 8.41612 46.6656 10.04 46.6673H46.79C48.414 46.6656 49.9709 46.0393 51.1191 44.9259C52.2674 43.8124 52.9133 42.3026 52.915 40.7279V15.2734C52.9133 13.6987 52.2674 12.1889 51.1191 11.0755C49.9709 9.96197 48.414 9.33567 46.79 9.33398ZM45.2391 19.1584L29.4891 31.0372C29.182 31.2687 28.8041 31.3944 28.415 31.3944C28.026 31.3944 27.6481 31.2687 27.341 31.0372L11.591 19.1584C11.4059 19.0229 11.2505 18.8531 11.1337 18.6588C11.0169 18.4645 10.9411 18.2497 10.9107 18.0268C10.8803 17.8039 10.8959 17.5773 10.9565 17.3603C11.0172 17.1432 11.1217 16.9401 11.2641 16.7626C11.4064 16.585 11.5837 16.4367 11.7856 16.3262C11.9876 16.2157 12.2102 16.1453 12.4405 16.1189C12.6708 16.0925 12.9042 16.1108 13.1271 16.1727C13.35 16.2346 13.5581 16.3388 13.7391 16.4793L28.415 27.5478L43.091 16.4793C43.458 16.2106 43.9193 16.0927 44.3752 16.1512C44.831 16.2097 45.2449 16.4398 45.5271 16.7919C45.8094 17.1439 45.9374 17.5895 45.8835 18.0324C45.8296 18.4753 45.5981 18.8797 45.2391 19.1584Z"
                        fill="#525050"
                      />
                    </svg>
                    <div>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary">
                        Рассылки:
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">- Верстка письма</li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Создание цепочки писем для e-mail рассылки
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - При регистрации на вебинар
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Дожимающая цепочка писем после вебинара
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Цепочка писем после оплаты
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="desktop:max-w-[885px] w-full flex flex-col justify-between phone:p-[44px] desktop:rounded-[36px] nokia:rounded-[23px] rounded-[17px] nokia:p-[30px] p-[21px] bg-green">
                    <svg
                      className="phone:mb-[47px] nokia:mb-[33px] mb-[22px] desktop:w-[56px] desktop:h-[56px] nokia:w-[36px] nokia:h-[36px] w-[27px] h-[27px]"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5142_656)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M38.5 29.75H29.75V38.5C29.75 39.4625 28.9678 40.25 28 40.25C27.0322 40.25 26.25 39.4625 26.25 38.5V29.75H17.5C16.5322 29.75 15.75 28.9625 15.75 28C15.75 27.0375 16.5322 26.25 17.5 26.25H26.25V17.5C26.25 16.5375 27.0322 15.75 28 15.75C28.9678 15.75 29.75 16.5375 29.75 17.5V26.25H38.5C39.4678 26.25 40.25 27.0375 40.25 28C40.25 28.9625 39.4678 29.75 38.5 29.75ZM28 0C12.5352 0 0 12.53 0 28C0 43.47 12.5352 56 28 56C43.4647 56 56 43.47 56 28C56 12.53 43.4647 0 28 0Z"
                          fill="#525050"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5142_656">
                          <rect width="56" height="56" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div>
                      <h6 className="font-Manrope font-bold text-black-dark desktop:text-[24px] phone:text-[24px] nokia:text-[15px] text-[11.87px] desktop:leading-[28px] phone:leading-[24px] nokia:leading-[19px] leading-[14.24px] nokia:pb-[24px] pb-[11px] border-b-[.6px] border-secondary uppercase">
                        дополнительно:
                      </h6>
                      <ul className="nokia:mt-[24px] mt-[15px]">
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Помогаем настроить и провести веб
                        </li>
                        <li className="font-Manrope font-normal text-secondary nokia:text-[16px] text-[7.91px] nokia:leading-[21px] leading-[10px]">
                          - Подключаем системы аналитики: Я. Метрику, ВК пиксель
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="max-w-[1880px] mx-auto bg-black-bg-dark nokia:rounded-[20px] rounded-[12px] relative overflow-hidden">
              <div className="desktop:py-[132px] py-[57px] desktop:px-[50px] px-[10px]">
                <h3 className="font-IgraSans font-normal desktop:text-[48px] desktop:leading-[48px] laptop:text-[56px] text-[30px] nokia:text-[42px] nokia:leading-[42px] leading-[30px] text-white nokia:mb-3 mb-2 uppercase text-center">
                  мы не делаем:
                </h3>
                <div className="desktop:w-full tablet:w-full mx-auto nokia:w-[500px] flex tablet:flex-row flex-col desktop:gap-[36px] nokia:gap-[32px] gap-[20px] desktop:p-[32px] nokia:py-[40px] nokia:px-[28px] py-[28px] px-[33px] desktop:rounded-[16px] rounded-[20px] border-border-line border-[1px] desktop:mt-[32px] mt-[30px] relative z-30 bg-what-bg">
                  <div className="flex items-center desktop:gap-[36px] nokia:gap-[32px] gap-[23px] desktop:rounded-[16px] rounded-[10px] bg-grey-dark desktop:p-[48px] nokia:p-[35px] py-[20px] px-[30px]">
                    <svg
                      className="desktop:w-[56px] desktop:h-[56px] nokia:w-[50px] nokia:h-[50px] w-[35px] h-[35px] flex-shrink-0"
                      width="56"
                      height="56"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.0655 51.3327C31.816 51.3325 31.5681 51.2859 31.3315 51.1947L23.5391 48.2029C23.0757 48.0232 22.6732 47.6795 22.3887 47.2208C22.1042 46.762 21.9522 46.2115 21.9544 45.6474V32.2745C21.9523 32.2691 21.9493 32.2641 21.9457 32.2599L5.54923 10.2234C5.18565 9.73467 4.95126 9.13583 4.87387 8.49797C4.79648 7.86012 4.87935 7.21004 5.11264 6.62491C5.34593 6.03978 5.71983 5.54418 6.18997 5.19695C6.6601 4.84972 7.20671 4.66545 7.76491 4.66602H48.5932C49.1514 4.66545 49.698 4.84972 50.1681 5.19695C50.6382 5.54418 51.0121 6.03978 51.2454 6.62491C51.4787 7.21004 51.5616 7.86012 51.4842 8.49797C51.4068 9.13583 51.1724 9.73467 50.8088 10.2234L34.4075 32.2622C34.4042 32.2667 34.4013 32.2716 34.3988 32.2767V48.6404C34.3997 48.9942 34.34 49.3448 34.223 49.6719C34.1061 49.999 33.9342 50.2962 33.7174 50.5464C33.5005 50.7966 33.243 50.9949 32.9595 51.1298C32.676 51.2648 32.3721 51.3337 32.0655 51.3327Z"
                        fill="#8FFE01"
                      />
                    </svg>
                    <span className="font-Manrope font-medium desktop:text-[24px] desktop:leading-[28.8px] laptop:text-[19px] laptop:leading-[22px] nokia:text-[18px] nokia:leading-[22px] text-[13px] leading-[16px] uppercase text-bg-color">
                      Прописывание сценария вебинара
                    </span>
                  </div>
                  <div className="flex items-center desktop:gap-[36px] nokia:gap-[32px] gap-[23px] desktop:rounded-[16px] rounded-[10px] bg-grey-dark desktop:p-[48px] nokia:p-[35px] py-[20px] px-[30px]">
                    <svg
                      className="desktop:w-[56px] desktop:h-[56px] nokia:w-[50px] nokia:h-[50px] w-[35px] h-[35px] flex-shrink-0"
                      width="57"
                      height="56"
                      viewBox="0 0 57 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M47.457 9.33398H10.707C9.08311 9.33567 7.52621 9.96197 6.37792 11.0755C5.22964 12.1889 4.58377 13.6987 4.58203 15.2734V40.7279C4.58377 42.3026 5.22964 43.8124 6.37792 44.9259C7.52621 46.0393 9.08311 46.6656 10.707 46.6673H47.457C49.0809 46.6656 50.6379 46.0393 51.7861 44.9259C52.9344 43.8124 53.5803 42.3026 53.582 40.7279V15.2734C53.5803 13.6987 52.9344 12.1889 51.7861 11.0755C50.6379 9.96197 49.0809 9.33567 47.457 9.33398ZM45.9061 19.1584L30.1561 31.0372C29.849 31.2687 29.471 31.3944 29.082 31.3944C28.693 31.3944 28.3151 31.2687 28.008 31.0372L12.258 19.1584C12.0729 19.0229 11.9175 18.8531 11.8007 18.6588C11.6839 18.4645 11.6081 18.2497 11.5777 18.0268C11.5473 17.8039 11.5629 17.5773 11.6235 17.3603C11.6842 17.1432 11.7887 16.9401 11.931 16.7626C12.0734 16.585 12.2507 16.4367 12.4526 16.3262C12.6546 16.2157 12.8772 16.1453 13.1075 16.1189C13.3378 16.0925 13.5711 16.1108 13.7941 16.1727C14.017 16.2346 14.2251 16.3388 14.4061 16.4793L29.082 27.5478L43.758 16.4793C44.1249 16.2106 44.5863 16.0927 45.0421 16.1512C45.498 16.2097 45.9119 16.4398 46.1941 16.7919C46.4764 17.1439 46.6044 17.5895 46.5505 18.0324C46.4966 18.4753 46.2651 18.8797 45.9061 19.1584Z"
                        fill="#8FFE01"
                      />
                    </svg>
                    <span className="font-Manrope font-medium desktop:text-[24px] desktop:leading-[28.8px] laptop:text-[19px] laptop:leading-[22px] nokia:text-[18px] nokia:leading-[22px] text-[13px] leading-[16px] uppercase text-bg-color">
                      Смыслы в ботах и e-mail рассылках
                    </span>
                  </div>
                  <div className="flex items-center desktop:gap-[36px] nokia:gap-[32px] gap-[23px] desktop:rounded-[16px] rounded-[10px] bg-grey-dark desktop:p-[48px] nokia:p-[35px] py-[20px] px-[30px]">
                    <svg
                      className="desktop:w-[56px] desktop:h-[56px] nokia:w-[50px] nokia:h-[50px] w-[35px] h-[35px] flex-shrink-0"
                      width="57"
                      height="56"
                      viewBox="0 0 57 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.671 51.3327H15.2164C14.6538 51.3327 14.1143 51.1092 13.7165 50.7114C13.3187 50.3136 13.0952 49.774 13.0952 49.2115C13.0952 48.6489 13.3187 48.1093 13.7165 47.7115C14.1143 47.3137 14.6538 47.0903 15.2164 47.0903H40.671C41.2335 47.0903 41.7731 47.3137 42.1709 47.7115C42.5687 48.1093 42.7922 48.6489 42.7922 49.2115C42.7922 49.774 42.5687 50.3136 42.1709 50.7114C41.7731 51.1092 41.2335 51.3327 40.671 51.3327Z"
                        fill="#8FFE01"
                      />
                      <path
                        d="M40.671 4.66602H15.2164C13.8236 4.66602 12.4444 4.94035 11.1576 5.47335C9.87086 6.00636 8.70166 6.7876 7.71679 7.77246C5.72777 9.76148 4.61035 12.4592 4.61035 15.2721V32.2418C4.61035 35.0547 5.72777 37.7524 7.71679 39.7414C8.70166 40.7263 9.87086 41.5075 11.1576 42.0405C12.4444 42.5735 13.8236 42.8478 15.2164 42.8478H40.671C42.0638 42.8478 43.4429 42.5735 44.7297 42.0405C46.0165 41.5075 47.1857 40.7263 48.1706 39.7414C49.1554 38.7565 49.9367 37.5873 50.4697 36.3005C51.0027 35.0137 51.277 33.6346 51.277 32.2418V15.2721C51.277 13.8793 51.0027 12.5001 50.4697 11.2133C49.9367 9.92653 49.1554 8.75732 48.1706 7.77246C47.1857 6.7876 46.0165 6.00636 44.7297 5.47335C43.4429 4.94035 42.0638 4.66602 40.671 4.66602ZM32.1861 25.6024L25.8225 29.2721C25.4994 29.4586 25.1328 29.5566 24.7598 29.5563C24.3867 29.5559 24.0203 29.4572 23.6976 29.27C23.3749 29.0828 23.1072 28.8138 22.9217 28.4902C22.7361 28.1665 22.6392 27.7997 22.6407 27.4266V20.0872C22.6392 19.7142 22.7361 19.3473 22.9217 19.0237C23.1072 18.7 23.3749 18.431 23.6976 18.2439C24.0203 18.0567 24.3867 17.9579 24.7598 17.9576C25.1328 17.9572 25.4994 18.0552 25.8225 18.2418L32.1861 21.9115C32.5126 22.0965 32.7841 22.3648 32.973 22.689C33.1619 23.0132 33.2615 23.3817 33.2615 23.7569C33.2615 24.1322 33.1619 24.5007 32.973 24.8249C32.7841 25.1491 32.5126 25.4174 32.1861 25.6024Z"
                        fill="#8FFE01"
                      />
                    </svg>
                    <span className="font-Manrope font-medium desktop:text-[24px] desktop:leading-[28.8px] laptop:text-[19px] laptop:leading-[22px] nokia:text-[18px] nokia:leading-[22px] text-[13px] leading-[16px] uppercase text-bg-color">
                      Дизайн тренингов/уроков
                    </span>
                  </div>
                </div>

                <div className="desktop:pt-[118px] pt-[80px] nokia:pb-0 pb-[150px] desktop:w-full tablet:w-full mx-auto nokia:w-[500px] z-20 relative">
                  <h3 className="font-IgraSans font-normal desktop:text-[48px] desktop:leading-[48px] laptop:text-[56px] text-[30px] nokia:text-[42px] nokia:leading-[42px] leading-[30px] text-white nokia:mb-4 mb-4 uppercase nokia:text-start text-center">
                    делаем:
                  </h3>
                  <p className="max-w-[839px] pl-[18px] relative before:absolute before:left-0 before:h-[69px] before:w-[3px] before:bg-green before:top-0 before:bottom-0 before:my-auto desktop:mt-[32px] desktop:mb-[170px] font-Manrope font-medium text-white desktop:text-[29px] laptop:text-[29px] phone:text-[29px] nokia:text-[29px] text-[18] desktop:leading-[44px] laptop:leading-[44px] phone:leading-[44px] nokia:leading-[44px] leading-[27.6px] nokia:mb-[25px] mb-[18px]">
                    Только техническую часть и работаем с контентом, который вы нам предоставляете
                  </p>
                  <CallToActionButton textClassName="p-0 !left-0 " className={`tablet:w-auto w-full max-w-full`}>
                    ОСТАВИТЬ ЗАЯВКУ
                  </CallToActionButton>
                </div>
                <Image
                  width={925}
                  height={1133}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}graficimg1?field=slug`}
                  alt={`Фото image`}
                  className={`select-none absolute desktop:w-[1098px] laptop:w-[925px] phone:w-[587px] nokia:w-[500px] w-[100%] laptop:bottom-[-410px] laptop:right-[-30px] z-10 nokia:bottom-[110px] nokia:right-[-250px] nokia:block hidden bottom-[-200px] right-[50px]`}
                />
                <Image
                  width={673}
                  height={675}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}graficimg2?field=slug`}
                  alt={`Фото image`}
                  className={`select-none absolute desktop:w-[1098px] nokia:hidden block laptop:w-[925px] phone:w-[587px] nokia:w-[500px] w-[100%] laptop:bottom-[-410px] laptop:right-[-30px] z-10 nokia:bottom-[110px] nokia:right-[-250px] bottom-[-120px] right-[0px]`}
                />
              </div>
            </div>
          </section>

          <section className="mb-5">
            <div className="max-w-[1880px] mx-auto bg-black-bg-dark phone:rounded-[20px] rounded-[12px] relative overflow-hidden">
              <div className="desktop:pt-[150px] desktop:pb-[190px] py-[57px] laptop:pt-[87px] laptop:pb-[150px] desktop:px-[50px] px-[10px]">
                <h3 className="font-IgraSans font-normal desktop:text-[48px] desktop:leading-[48px] laptop:text-[56px] text-[30px] phone:text-[42px] phone:leading-[42px] leading-[30px] text-white phone:mb-16 mb-6 uppercase text-center">
                  почему мы?
                </h3>
                <div className="desktop:w-full tablet:w-full mx-auto phone:w-[500px] flex items-center justify-center tablet:flex-row flex-col desktop:gap-[36px] phone:gap-[32px] gap-[20px]  desktop:rounded-[16px] rounded-[20px]  desktop:mt-[32px] mt-[30px] relative z-30 ">
                  <div className="laptop:w-[430px] relative flex flex-col justify-center items-start phone:gap-[16px] gap-[12px] desktop:rounded-[32px] rounded-[23px] bg-number_bg desktop:p-[48px] phone:p-[35px] py-[20px] px-[30px] overflow-hidden phone:h-[330px] h-[270px]">
                    <h6 className="absolute left-[-61px] top-0 bottom-0 my-auto font-Manrope font-extrabold phone:text-[300px] text-[231px] phone:leading-[348px] leading-[277px] text-green">
                      1
                    </h6>
                    <span className="max-w-[249px] phone:ml-[100px] ml-[50px] font-Manrope font-bold phone:text-[24px] phone:leading-[28px] text-[18px] leading-[22px] uppercase text-green">
                      любая задача под силу:
                    </span>
                    <p className="max-w-[249px] phone:ml-[100px] ml-[50px] font-Manrope font-medium text-white phone:text-[20px] text-[18px] phone:leading-[30px] leading-[23px]">
                      В нашей команде есть BackEnd и FrontEnd разработчики
                    </p>
                  </div>
                  <div className="laptop:w-[430px] relative flex flex-col justify-center items-start phone:gap-[16px] gap-[12px] desktop:rounded-[32px] rounded-[23px] bg-number_bg desktop:p-[48px] phone:p-[35px] py-[20px] px-[30px] overflow-hidden phone:h-[390px] h-[270px]">
                    <h6 className="absolute left-[-61px] top-0 bottom-0 my-auto font-Manrope font-extrabold phone:text-[300px] text-[231px] phone:leading-[348px] leading-[277px] text-green">
                      2
                    </h6>
                    <span className="max-w-[249px] phone:ml-[100px] ml-[50px] font-Manrope font-bold phone:text-[24px] phone:leading-[28px] text-[18px] leading-[22px] uppercase text-green">
                      Каждый день на связи:
                    </span>
                    <p className="max-w-[249px] phone:ml-[100px] ml-[50px] font-Manrope font-medium text-white phone:text-[20px] text-[18px] phone:leading-[30px] leading-[23px]">
                      Делаем всю работу за несколько дней, вам не нужно месяцами ждать воронку
                    </p>
                  </div>
                  <div className="laptop:w-[430px] relative flex flex-col justify-center items-start phone:gap-[16px] gap-[12px] desktop:rounded-[32px] rounded-[23px] bg-number_bg desktop:p-[48px] phone:p-[35px] py-[20px] px-[30px] overflow-hidden phone:h-[330px] h-[270px]">
                    <h6 className="absolute left-[-61px] top-0 bottom-0 my-auto font-Manrope font-extrabold phone:text-[300px] text-[231px] phone:leading-[348px] leading-[277px] text-green">
                      3
                    </h6>
                    <span className="max-w-[249px] phone:ml-[100px] ml-[50px] font-Manrope font-bold phone:text-[24px] phone:leading-[28px] text-[18px] leading-[22px] uppercase text-green">
                      Сопровождение
                    </span>
                    <p className="max-w-[249px] phone:ml-[100px] ml-[50px]  font-Manrope font-medium text-white phone:text-[20px] text-[18px] phone:leading-[30px] leading-[23px]">
                      Оказываем сопровождение в течение 5 дней после сдачи работ
                    </p>
                  </div>
                </div>
                <Image
                  width={1194}
                  height={776}
                  loading={`lazy`}
                  src={`${SOURCE.static_url}grafikbottom?field=slug`}
                  alt={`Фото image`}
                  className={`select-none absolute phone:bottom-[-413px] bottom-0 left-0 right-0 mx-auto`}
                />
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
            <main className={` section p-5  pt-2 laptop:p-5 laptop:pl-[50px] laptop:pt-[70px] bg-transparent ${styles.screen}`}>
              <div className="flex gap-16 desktop:gap-10">
                <div className="flex laptop:items-start laptop:justify-center flex-col " style={{ flex: 1 }}>
                  <h1
                    className={`${styles.title} text-4xl tablet:text-[56px] phone:tracking-wider tablet:tracking-normal tablet:leading-[67px] laptop:text-[56px] laptop:leading-[67px] uppercase mt-5 laptop:mt-24`}
                  >
                    <span className={styles.titleSpan}>остались вопросы? </span> <br className="tablet:hidden laptop:flex" />
                    Не зHаете нужен ли вам <br className="hidden xs:flex" />
                    чат-бот/автоворонка?
                  </h1>
                  <h3 className="font-bold text-sm tablet:text-lg laptop:text-lg desktop:text-base uppercase pt-6 pb-10 tracking-wider xs:w-max">
                    Оставьте заявку на бесплатную консультацию, расскажите про свой проект и за 30 минут определимся нужно ли вам это или нет
                  </h3>

                  <CallBackForm className={`hidden laptop:block rounded-xl p-6 desktop:p-14 w-max ${styles.feedback}`} />
                </div>

                <aside
                  className={`hidden laptop:ml-12 laptop:flex desktop:mb-5 desktop:pb-16 flex-1 w-[600px] bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 laptop:h-[980px] laptop:max-w-[777px] ${styles.aside}`}
                >
                  <Tablet text={'Поможем увеличить продажи\nс помощью инструментов\nинтернет-маркетинга'} icon={<Chart />} margin={-90} />
                  <Tablet text={'5+ лет опыта разработки\nчат-ботов и автоворонок'} icon={<Diplomat />} margin={-15} />
                  <Tablet text={'Спикер конференции:\nСуровый Питерский SMM,\nсотрудничал с Senler'} icon={<WorkerMan />} margin={40} last />
                </aside>
              </div>

              <CallBackForm className={`laptop:hidden rounded-xl mx-auto p-6 desktop:p-14 my-5 w-full max-w-[728px] ${styles.feedback}`} />

              <aside className={`flex laptop:hidden flex-1 h-[625px] w-full bg-[url("/Nilita.webp")] bg-no-repeat bg-cover rounded-3xl justify-end gap-5 ${styles.aside}`} />
            </main>
          </section>
        </main>
      </div>
    </>
  )
}
