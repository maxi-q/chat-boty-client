import { CallBackBlock } from '@/modules/Posts/CallBackBlock'

import Image from 'next/Image'

import { CallToActionButton } from '@/components/ui/CallToAction'
import SettingsIcon from './svg/settings-icon'
import SettingsIconGray from './svg/settings-icon-gray'
import SettingsIconDouble from './svg/settings-icon copy'
import HomeIcon1 from './svg/home-icon-1'

import CanIcon1 from './svg/can-icon-1'
import CanIcon2 from './svg/can-icon-2'
import CanIcon3 from './svg/can-icon-3'
import CanIcon4 from './svg/can-icon-4'
import CanIcon5 from './svg/can-icon-5'
import CanIcon6 from './svg/can-icon-6'

import LevelIcon1 from './svg/level-icon-1'
import LevelIcon2 from './svg/level-icon-2'
import LevelIcon3 from './svg/level-icon-3'
import LevelIcon4 from './svg/level-icon-4'
import LevelIcon5 from './svg/level-icon-5'
import LevelIcon6 from './svg/level-icon-6'
import LevelIcon7 from './svg/level-icon-7'



import styles from './styles.module.css'
import { SOURCE } from '@/constants/static'
import { TextCarousel } from '@/modules/landing/FiveScreen/modules/TextCarousel'
import { VideoCarousel } from '@/modules/landing/FiveScreen/modules/VideoCarousel'

export default function Page() {
    return (
      <div className="overflow-hidden laptop:px-5 px-0">
        <main>
          <section className="mt-5">
            <div className={`${styles.container} flex flex-col items-center laptop:block bg-white rounded-[20px] overflow-hidden pt-12 laptop:pt-[60px] px-[51px] pb-[103px] relative z-[1]`}>
              <div className='w-[71px] nokia:w-[95px] tablet:w-[152px] laptop:w-[103px] desktop:w-[169px] absolute right-[-14px] nokia:right-[-19px] tablet:right-[-31px] laptop:right-[-51px] desktop:right-[-65px] top-[371px] nokia:top-[495px] tablet:top-[792px] laptop:top-[109px] desktop:top-[47px] z-[-1]'>
                <SettingsIcon />
              </div>
              {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}settings-icon?field=slug`} alt="" className="w-[71px] nokia:w-[95px] tablet:w-[152px] laptop:w-[103px] desktop:w-[169px] absolute right-[-14px] nokia:right-[-19px] tablet:right-[-31px] laptop:right-[-51px] desktop:right-[-65px] top-[371px] nokia:top-[495px] tablet:top-[792px] laptop:top-[109px] desktop:top-[47px] z-[-1]"/> */}
              <div className="hidden desktop:block w-[73px] absolute right-[636px] top-[60px] z-[-1]">
                <SettingsIconGray />
              </div>
              {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}settings-icon-gray?field=slug`}  alt="" className="hidden desktop:block w-[73px] absolute right-[636px] top-[60px] z-[-1]"/> */}
              <div className="w-[22px] nokia:w-[29px] tablet:w-[48px] absolute right-[45px] nokia:right-[60px] tablet:right-[97px] laptop:right-[406px] desktop:right-[560px] bottom-[110px] nokia:bottom-[146px] tablet:bottom-[234px] laptop:bottom-[102px] desktop:bottom-[219px] z-[-1]">
                <SettingsIconGray />
              </div>
              {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}settings-icon-gray?field=slug`}  alt="" className="w-[22px] nokia:w-[29px] tablet:w-[48px] absolute right-[45px] nokia:right-[60px] tablet:right-[97px] laptop:right-[406px] desktop:right-[560px] bottom-[110px] nokia:bottom-[146px] tablet:bottom-[234px] laptop:bottom-[102px] desktop:bottom-[219px] z-[-1]"/> */}
              <div className='w-[44px] nokia:w-[59px] tablet:w-[95px] desktop:w-[90px] absolute left-[-11px] nokia:left-[-15px] tablet:left-[-24px] laptop:left-auto laptop:right-[595px] desktop:right-[679px] top-[154px] nokia:top-[205px] tablet:top-[329px] laptop:top-auto laptop:bottom-[-25px] desktop:bottom-[78px] z-[-1]'>
                <SettingsIconDouble />
              </div>
              {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}settings-icon?field=slug`} alt="" className="w-[44px] nokia:w-[59px] tablet:w-[95px] desktop:w-[90px] absolute left-[-11px] nokia:left-[-15px] tablet:left-[-24px] laptop:left-auto laptop:right-[595px] desktop:right-[679px] top-[154px] nokia:top-[205px] tablet:top-[329px] laptop:top-auto laptop:bottom-[-25px] desktop:bottom-[78px] z-[-1]"/> */}
              <Image width={300} height={300} src={`${SOURCE.static_url}msg-icon-1?field=slug`} alt="" className="w-[64px] nokia:w-[86px] tablet:w-[138px] desktop:w-auto absolute left-[19px] nokia:left-9 tablet:left-[58px] laptop:left-auto laptop:right-[257px] desktop:right-[356px] bottom-[181px] nokia:bottom-[252px] tablet:bottom-[404px] laptop:bottom-auto laptop:top-[55px] desktop:top-[113px] z-[-1]"/>
              <Image width={600} height={600} src={`${SOURCE.static_url}home-robot?field=slug`} alt="" className="min-w-[321px] nokia:min-w-[428px] tablet:min-w-[685px] w-[321px] nokia:w-[428px] tablet:w-[685px] laptop:w-[549px] desktop:w-[840px] absolute translate-x-1/2 laptop:translate-x-0 right-1/2 laptop:right-[-119px] desktop:right-[-167px] bottom-[-61px] nokia:bottom-[-82.5px] tablet:bottom-[-132px] desktop:bottom-[-212px] z-[-1]"/>
              <h2 className="order-1 text-[25px] nokia:text-[30px] tablet:text-[50px] laptop:text-[55px] desktop:text-[64px] leading-[120%] font-IgraSans uppercase mb-[22px] nokia:mb-[19px] tablet:mb-[29px] laptop:mb-[34px] desktop:mb-16 text-center laptop:text-start"><span className="inline text-purple">Техническая сборка <br/> автоворонки</span> в соцсетях <br/> и мессенджерах за 72 часа </h2>
              <ul className="order-3 flex flex-col laptop:flex-row  items-stretch gap-[17px] nokia:gap-[22px] tablet:gap-[28px] desktop:gap-[34px] mb-[247px] nokia:mb-[356px] tablet:mb-[571px] laptop:mb-[46px] desktop:mb-[52px]">
                <li className="w-[194px] nokia:w-[260px] tablet:w-[415px] laptop:w-[318px] desktop:w-[386px] flex flex-col items-start gap-2 nokia:gap-[10px] tablet:gap-[13px] desktop:gap-4 bg-[rgba(243,243,243,0.5)] rounded-[16px] nokia:rounded-[21px] laptop:rounded-[26px] desktop:rounded-[32px] pt-2 nokia:pt-[10px] tablet:pt-[13px] desktop:pt-[16px] pr-[22px] desktop:pr-[60px] pb-[23px] nokia:pb-8 tablet:pb-[37px] desktop:pb-[45px] pl-[23px] nokia:pl-[30px] tablet:pl-[37px] desktop:pl-[46px]">
                  <HomeIcon1 className="w-[23px] nokia:w-[31px] tablet:w-[38px] desktop:w-auto" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}home-icon-1?field=slug`} alt="" className="w-[23px] nokia:w-[31px] tablet:w-[38px] desktop:w-auto"/> */}
                  <p className="font-Manrope text-[12px] nokia:text-[16px] tablet:text-[25px] laptop:text-[19px] desktop:text-[24px] font-bold leading-[120%] uppercase">интеграции любой сложности</p>
                </li>
                <li className="w-[194px] nokia:w-[260px] tablet:w-[415px] laptop:w-[290px] desktop:w-[386px] flex flex-col items-start gap-2 nokia:gap-[10px] tablet:gap-[13px] desktop:gap-4 bg-[rgba(243,243,243,0.5)] rounded-[16px] nokia:rounded-[21px] laptop:rounded-[26px] desktop:rounded-[32px] pt-2 nokia:pt-[10px] tablet:pt-[13px] desktop:pt-[16px] pr-[22px] desktop:pr-[60px] pb-[23px] nokia:pb-8 tablet:pb-[37px] desktop:pb-[45px] pl-[23px] nokia:pl-[30px] tablet:pl-[37px] desktop:pl-[46px]">
                  <HomeIcon1 className="w-[23px] nokia:w-[31px] tablet:w-[38px] desktop:w-auto" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}home-icon-1?field=slug`} alt="" className="w-[23px] nokia:w-[31px] tablet:w-[38px] desktop:w-auto"/> */}
                  <p className="font-Manrope text-[12px] nokia:text-[16px] tablet:text-[25px] laptop:text-[19px] desktop:text-[24px] font-bold leading-[120%] uppercase">Соблюдение <br/> сроков</p>
                </li>
                <li className="w-[194px] nokia:w-[260px] tablet:w-[415px] laptop:w-[318px] desktop:w-[386px] flex flex-col items-start gap-2 nokia:gap-[10px] tablet:gap-[13px] desktop:gap-4 bg-[rgba(243,243,243,0.5)] rounded-[16px] nokia:rounded-[21px] laptop:rounded-[26px] desktop:rounded-[32px] pt-2 nokia:pt-[10px] tablet:pt-[13px] desktop:pt-[16px] pr-[22px] desktop:pr-[60px] pb-[23px] nokia:pb-8 tablet:pb-[37px] desktop:pb-[45px] pl-[23px] nokia:pl-[30px] tablet:pl-[37px] desktop:pl-[46px]">
                  <HomeIcon1 className="w-[23px] nokia:w-[31px] tablet:w-[38px] desktop:w-auto" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}home-icon-1?field=slug`} alt="" className="w-[23px] nokia:w-[31px] tablet:w-[38px] desktop:w-auto"/> */}
                  <p className="font-Manrope text-[12px] nokia:text-[16px] tablet:text-[25px] laptop:text-[19px] desktop:text-[24px] font-bold leading-[120%] uppercase">во всех соцсетях <br/> и мессенджерах</p>
                </li>
              </ul>
              <CallToActionButton textClassName="p-0 !left-0 " className={`order-2 btn_green mb-[18px] nokia:mb-[33px] laptop:mb-0 tablet:w-auto w-full max-w-full`}>
                ОСТАВИТЬ ЗАЯВКУ
              </CallToActionButton>
            </div>
          </section>
          <section className="mt-5 hidden laptop:block">
            <div className={`${styles.container}`}>
              <h2 className="font-IgraSans text-[48px] desktop:text-[64px] leading-[120%] font-normal uppercase mb-12 desktop:mb-[65px]">что могут <span className="text-purple">чат-боты:</span></h2>
              <ul className="grid grid-cols-3 gap-[43px_33px] desktop:gap-[43px_45px]">
                <li>
                  <a href="#" className={`flex flex-col items-start justify-between min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[38px] desktop:rounded-[50px] p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <CanIcon1 className="w-[49px] desktop:w-auto" />
                    {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}can-icon-1?field=slug`} alt="" className="w-[49px] desktop:w-auto"/> */}
                    <span className="flex flex-col items-start">
                      <span className="text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] desktop:mb-[7px] block">01</span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[24px] desktop:mb-[33px]">Прогреть вашу аудиторию:</span>
                      <span className="block h-[1.4px] w-full bg-secondary mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Видео, текст, текст + картинка, аудио. Если человек ничего не делает, то бот отправит напоминание</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-between min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[38px] desktop:rounded-[50px] p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <CanIcon2 className="w-[49px] desktop:w-auto" />
                    {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}can-icon-2?field=slug`} alt="" className="w-[49px] desktop:w-auto"/> */}
                    <span className="flex flex-col items-start">
                      <span className="text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] desktop:mb-[7px] block">02</span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[24px] desktop:mb-[33px]">консультирование:</span>
                      <span className="block h-[1.4px] w-full bg-secondary mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Они работают 24/7 и помогают вашей аудитории с ответами на часто задаваемые вопросы и не только</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-between min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[38px] desktop:rounded-[50px] p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <CanIcon3 className="w-[49px] desktop:w-auto" />
                    {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}can-icon-3?field=slug`} alt="" className="w-[49px] desktop:w-auto"/> */}
                    <span className="flex flex-col items-start">
                      <span className="text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] desktop:mb-[7px] block">03</span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[24px] desktop:mb-[33px]">Рассылки:</span>
                      <span className="block h-[1.4px] w-full bg-secondary mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Попав в вашего чат-бота мы можем дальше взаимодействовать со всей базой</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-between min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[38px] desktop:rounded-[50px] p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <CanIcon4 className="w-[49px] desktop:w-auto" />
                    {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}can-icon-4?field=slug`} alt="" className="w-[49px] desktop:w-auto"/> */}
                    <span className="flex flex-col items-start">
                      <span className="text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] desktop:mb-[7px] block">04</span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[24px] desktop:mb-[33px]">продажи:</span>
                      <span className="block h-[1.4px] w-full bg-secondary mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Видео, текст, текст + картинка, аудио. Если человек ничего не делает, то бот отправит напоминание</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-between min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[38px] desktop:rounded-[50px] p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <CanIcon5 className="w-[49px] desktop:w-auto" />
                    {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}can-icon-5?field=slug`} alt="" className="w-[49px] desktop:w-auto"/> */}
                    <span className="flex flex-col items-start">
                      <span className="text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] desktop:mb-[7px] block">05</span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[24px] desktop:mb-[33px]">опросы:</span>
                      <span className="block h-[1.4px] w-full bg-secondary mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Сегментируем базу на части и каждой отправляем персонализированные предложение</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-between min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[38px] desktop:rounded-[50px] p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <CanIcon6 className="w-[49px] desktop:w-auto" />
                    {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}can-icon-6?field=slug`} alt="" className="w-[49px] desktop:w-auto"/> */}
                    <span className="flex flex-col items-start">
                      <span className="text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[5px] desktop:mb-[7px] block">06</span>
                      <span className="block text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[24px] desktop:mb-[33px]">интеграции:</span>
                      <span className="block h-[1.4px] w-full bg-secondary mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Чат-боты могут регистрировать учеников в LMS системах, принимать платежи, переносить данные в гугл-таблицу</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-5">
            <div className={`${styles.container} rounded-[20px] !p-[39px_40px_36px] phone:!p-[53px_55px_48px] tablet:!p-[82px_88px] laptop:!pl-[36px] laptop:pr-[36px] desktop:!pl-[48px] desktop:!pr-[48px] overflow-hidden ${styles['!bg-black-dark']} text-white font-Manrope relative z-[1]`}>
              <Image width={100} height={100} src={`${SOURCE.static_url}level-bg?field=slug`} alt="" className="absolute left-0 top-0 w-full h-full object-cover z-[-1]"/>
              <h2 className="text-center font-normal text-[25px] phone:text-[29px] tablet:text-[48px] laptop:text-[64px] leading-[120%] font-IgraSans mb-[-5px] phone:mb-[9px] tablet:mb-[17px] laptop:mb-[6.7px] desktop:mb-[9px] uppercase">Выведем вaши воронки <br/> <span className="text-green">нa новый уровень</span></h2>
              <p className="text-[10px] phone:text-[14px] tablet:text-[22px] laptop:text-3xl text-center font-normal mb-[21px] phone:mb-[39px] tablet:mb-[62px] laptop:mb-[66px] desktop:mb-[88px]">За 5 лет работы были сделаны все возможные сценарии: </p>
              <ul className="flex flex-wrap gap-[13px] phone:gap-[18px] tablet:gap-[29px] laptop:gap-[26px] desktop:gap-9 uppercase font-Manrope border border-border-line border-solid rounded-[12px] phone:rounded-[16px] tablet:rounded-[25px] laptop:rounded-[23.83px] desktop:rounded-[32px] p-[12px] phone:p-[16px] tablet:p-[25px] laptop:p-6 desktop:p-8 bg-[rgba(35,34,37,0.5)]">
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[calc(100%_-_790px)] desktop:w-[calc(100%_-_1062px)] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon1 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-1?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Клуб с ежемесячной подпиской и автосписанием средств</p>
                </li>
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[356px] desktop:w-[479px] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon2 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-2?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Реферальная программа (в ТГ, ВК)</p>
                </li>
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[380px] desktop:w-[511px] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon3 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-3?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Автовебинарная воронка</p>
                </li>
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[402px] desktop:w-[541px] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon4 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-4?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Воронки для живого вебинара</p>
                </li>
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[calc(100%_-_428px)] desktop:w-[calc(100%_-_577px)] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon5 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-5?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Интеграции с гугл-таблицами, CRM системами, платёжными системами в том числе зарубежными</p>
                </li>
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[577px] desktop:w-[776px] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon6 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-6?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Чат-бот для Seller’ов на маркетплейсах для сбора отзывов</p>
                </li>
                <li className={`flex items-center gap-[12px] phone:gap-[18px] tablet:gap-[26px] desktop:gap-9 w-full laptop:w-[calc(100%_-_603px)] desktop:w-[calc(100%_-_812px)] p-[18px] phone:p-[23px] tablet:px-[35px] tablet:p-9 desktop:p-12 ${styles['bg-grey-dark']} rounded-[11.91px] desktop:rounded-2xl`}>
                  <LevelIcon7 className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]" />
                  {/* <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}level-icon-7?field=slug`} alt="" className="flex-shrink-0 w-[21px] phone:w-[28px] tablet:w-[45px] laptop:w-[41px] desktop:w-[56px]"/> */}
                  <p className="text-[9px] phone:text-[12px] tablet:text-[19px] laptop:text-[17px] desktop:text-[24px] leading-[120%] font-bold">Воронки со множеством дожимов и элементами геймификации и много пр.</p>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-5">
            <div className={`${styles.container} font-Manrope !p-[34px_23px] phone:!p-[38px_31px] tablet:!p-[51px]`}>
              <div className="flex flex-col laptop:flex-row items-stretch gap-[10px] phone:gap-[13px] tablet:gap-[20px] laptop:gap-[22px] desktop:gap-[30px] mb-3 phone:mb-[15px] tablet:mb-[24px] laptop:mb-[22px] desktop:mb-[30px]">
                <div className={`w-full laptop:w-[607px] desktop:w-[816px] ${styles['bg-green']} rounded-[7px] phone:rounded-[9px] tablet:rounded-[14px] desktop:rounded-[20px] p-[32px_24px_33px] phone:p-[43px_41px_46px_33px] tablet:p-[70px_52px_75px] laptop:px-[52px] desktop:px-[71px] flex flex-col justify-center`}>
                  <h2 className="font-IgraSans font-normal text-[23px] phone:text-[29px] tablet:text-[48px] desktop:text-[64px] leading-[120%] uppercase mb-[4px] phone:mb-[7px] tablet:mb-3 desktop:mb-4">С нaми вы будете в курсе всех новинок</h2>
                  <p className="text-[12px] phone:text-[16px] tablet:text-[26px] desktop:text-[36px] leading-[120%]">и узнаете новый функционал</p>
                </div>
                <div className="w-full laptop:w-[calc(100%_-_629px)] desktop:w-[calc(100%_-_846px)]">
                  <div className={`mb-[15px] tablet:mb-[25px] laptop:mb-[22px] desktop:mb-[30px] relative z-[1] p-[25px_26px_24px_111px] tablet:p-[40px_42px_40px_178px] laptop:pt-[42px] desktop:pt-[57px] laptop:pr-[43px] desktop:pr-[59px] laptop:pb-[36px] desktop:pb-[49px] laptop:pl-[186px] desktop:pl-[250px] ${styles.bgBgColor} rounded-[9px] tablet:rounded-[14px] desktop:rounded-[20px]`}>
                    <Image width={100} height={100} src={`${SOURCE.static_url}with-us-card-1?field=slug`} alt="" className="absolute w-[73px] tablet:w-[118px] laptop:w-[122px] desktop:w-[165px] bottom-0 left-[17px] tablet:left-7 laptop:left-10"/>
                    <div>
                      <h3 className="text-[16px] tablet:text-[24px] laptop:text-[29px] desktop:text-[40px] font-semibold leading-[120%] mb-[7px] desktop:mb-[10px]">В инстаграм боты могут:</h3>
                      <p className="text-[10px] tablet:text-[16px] laptop:text-[18px] desktop:text-[25px] font-normal leading-[120%] color-[#0B0A0A]">Отправлять голосовое, видео, карусель</p>
                    </div>
                  </div>
                  <div className={`relative z-[1] p-[25px_26px_29px_111px] tablet:p-[40px_42px_48px_178px] laptop:pt-[42px] desktop:pt-[57px] laptop:pr-[43px] desktop:pr-[59px] laptop:pb-[40px] desktop:pb-[49px] laptop:pl-[186px] desktop:pl-[250px] ${styles.bgBgColor} rounded-[9px] tablet:rounded-[14px] desktop:rounded-[20px]`}>
                    <Image width={100} height={100} src={`${SOURCE.static_url}with-us-card-2?field=slug`} alt="" className="absolute w-[59px] tablet:w-[95px] laptop:w-[99px] desktop:w-[133px] bottom-1/2 left-7 tablet:left-[47px] desktop:left-[64px] translate-y-1/2"/>
                    <div>
                      <h3 className="text-[16px] tablet:text-[24px] laptop:text-[29px] desktop:text-[40px] font-semibold leading-[120%] mb-[7px] desktop:mb-[10px]">во вконтакте бот может:</h3>
                      <p className="text-[10px] tablet:text-[16px] laptop:text-[18px] desktop:text-[25px] font-normal leading-[120%] color-[#0B0A0A]">Создать пост на стене подписчиков с вашим текстом и картинкой (гиф-анимация, как это происходит)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col laptop:flex-row items-stretch gap-3 phone:gap-4 tablet:gap-[27px] laptop:gap-[21px] desktop:gap-[30px]">
                <div className={`w-full laptop:w-[calc(100%_-_506px)] desktop:w-[calc(100%_-_681px)] flex flex-row-reverse laptop:flex-row items-center gap-[10px] phone:gap-[14px] tablet:gap-[22px] laptop:gap-[43px] desktop:gap-[58px] ${styles.bgBgColor} rounded-[7px] phone:rounded-[9px] tablet:rounded-[14px] desktop:rounded-[20px] p-[12px_12px_15px_15px] phone:p-[16px_16px_20px_20px] tablet:p-[26px_27px_32px_33px] laptop:py-[44px] desktop:py-[29px] laptop:pl-[41px] desktop:pl-[68px] laptop:pr-[58px] desktop:pr-[79px]`}>
                  <Image width={100} height={100} src={`${SOURCE.static_url}with-us-card-3?field=slug`} alt="" className="w-[93px] phone:w-[125px] tablet:w-[200px] laptop:w-[241px] desktop:w-[324px] shrink-0"/>
                  <div className="w-full">
                    <h3 className="text-[12px] phone:text-[16px] tablet:text-[27px] laptop:text-[29px] desktop:text-[40px] uppercase font-semibold leading-[120%] mb-[3px] phone:mb-[4px] tablet:mb-[7px] desktop:mb-[10px]">Вы можете подключить нейрость для общения <br/> и продаж клиентам:</h3>
                    <p className="text-[7px] phone:text-[10px] tablet:text-[16px] laptop:text-[18px] desktop:text-[25px] font-normal leading-[120%] color-[#0B0A0A]">Как только появилась эта возможность <br/> в 2023 году мы реализовали для бренда одежды CHUKCHA </p>
                  </div>
                </div>
                <div className={`w-full laptop:w-[485px] desktop:w-[652px] ${styles['bg-green']} rounded-[7px] phone:rounded-[9px] tablet:rounded-[14px] desktop:rounded-[20px] p-[19px_16px] phone:p-[25px_22px] tablet:p-[41px_36px] laptop:p-[49px_79px_54px] desktop:p-[67px] flex justify-center flex-col items-start laptop:items-stretch`}>
                  <p className="w-full max-w-full desktop:max-w-[438px] text-[12px] phone:text-[16px] tablet:text-[27px] laptop:text-[18px] desktop:text-[25px] leading-[120%] mb-[16px] tablet:mb-[20px] laptop:mb-[14px]">
                  <span className=""><span className="inline font-semibold">Мы даже можем сделать аналог ХОМЯКА в Телеграм</span> на WebApp для вас.</span>
                  <span className="block laptop:inline text-[7.5px] phone:text-[10px] tablet:text-[16px] leading-[120%] laptop:text-inherit pt-[4px] tablet:pt-[7px] laptop:pt-0">С вас - сценарий, дизайн, <br className="laptop:hidden"/> а реализация за нами</span></p>

                  <CallToActionButton className={`mt-16 laptop:mt-3 laptop:w-auto max-w-full ${styles.CTAButton}`} color='white' actionClassName={styles.CTAAction} arrowClassName={styles.CTAArrow} textClassName="p-0 !left-0 !text-[10px] !tablet:text-[16px] !desktop:text-[24px] !leading-tight whitespace-nowrap">
                    хочу аналог хомяка
                  </CallToActionButton>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div className={`${styles.container} !bg-black-dark text-white relative z-[1] !py-[42px] phone:!py-[60px] tablet:!py-[96px] laptop:!py-[88px] desktop:!py-[119px] rounded-[20px] overflow-hidden`}>
              <Image width={100} height={100} src={`${SOURCE.static_url}working-bg?field=slug`} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"/>
              <h2 className="text-[25px] phone:text-[29px] tablet:text-[47px] laptop:text-[42px] desktop:text-[56px] leading-[120%] font-normal text-center font-IgraSans uppercase mb-[21px] phone:mb-[23px] tablet:mb-[38px] laptop:mb-[43px] desktop:mb-[59px]">этапы <br className="laptop:hidden"/> работы с нaми:</h2>
              <ul className="max-w-[297px] phone:max-w-[396px] tablet:max-w-[635px] laptop:max-w-[1107px] desktop:max-w-[1489px] mx-auto flex flex-wrap items-stretch gap-[10px] phone:gap-[13px] tablet:gap-[22px] desktop:gap-[30px] mb-[20px] phone:mb-[22px] tablet:mb-10 desktop:mb-[56px]">
                <li className="w-full laptop:w-[calc(100%_-_581px)] desktop:w-[calc(100%_-_782px)] rounded-[10px] phone:rounded-[14px] tablet:rounded-[22px] desktop:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] tablet:min-h-[144px] desktop:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] tablet:p-[20px_8px_20px_151px] desktop:p-[51px] desktop:pl-[203px]">
                  <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}working-icon-1-1?field=slug`} alt="" className="absolute w-[64px] phone:w-[86px] tablet:w-[138px] desktop:w-auto top-[3.8px] phone:top-[5px] tablet:top-[8px] desktop:top-[11px] left-[2px] phone:left-[3px] tablet:left-[4.5px] desktop:left-[6px] z-[-1]"/>
                  <div className="text-[11px] phone:text-[14px] tablet:text-[23px] desktop:text-[31px] leading-[120%]">
                    <h3 className="font-bold">Созвон для знакомства</h3>
                    <p className="font-normal">и обсуждения целей проекта</p>
                  </div>
                </li>
                <li className="w-full laptop:w-[559px] desktop:w-[752px] rounded-[10px] phone:rounded-[14px] tablet:rounded-[22px] desktop:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] tablet:min-h-[144px] desktop:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] tablet:p-[20px_8px_20px_151px] desktop:p-[51px] desktop:pl-[203px]">
                  <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}working-icon-4?field=slug`} alt="" className="absolute w-[58px] phone:w-[79px] tablet:w-[125px] desktop:w-auto top-1/2 left-[10px] phone:left-[13px] tablet:left-[21px] desktop:left-[29px] -translate-y-1/2 z-[-1]"/>
                  <div className="text-[11px] phone:text-[14px] tablet:text-[23px] desktop:text-[31px] leading-[120%]">
                    <h3 className="font-bold">Создание сценария бота</h3>
                    <p className="font-normal">и его утверждение</p>
                  </div>
                </li>
                <li className="w-full laptop:w-[calc(100%_-_543px)] desktop:w-[calc(100%_-_731px)] rounded-[10px] phone:rounded-[14px] tablet:rounded-[22px] desktop:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] tablet:min-h-[144px] desktop:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] tablet:p-[20px_8px_20px_151px] desktop:p-[51px] desktop:pl-[203px]">
                  <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}working-icon-2?field=slug`} alt="" className="absolute w-[58px] phone:w-[79px] tablet:w-[125px] desktop:w-auto top-1/2 left-[10px] phone:left-[13px] tablet:left-[21px] desktop:left-[29px] -translate-y-1/2 z-[-1]"/>
                  <div className="text-[11px] phone:text-[14px] tablet:text-[23px] desktop:text-[31px] leading-[120%]">
                    <h3 className="font-bold">Заключение договора:</h3>
                    <p className="font-normal">прописываем наши обязанности</p>
                  </div>
                </li>
                <li className="w-full laptop:w-[521px] desktop:w-[701px] rounded-[10px] phone:rounded-[14px] tablet:rounded-[22px] desktop:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] tablet:min-h-[144px] desktop:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] tablet:p-[20px_8px_20px_151px] desktop:p-[51px] desktop:pl-[203px]">
                  <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}working-icon-5?field=slug`} alt="" className="absolute w-[58px] phone:w-[79px] tablet:w-[125px] desktop:w-auto top-1/2 left-[10px] phone:left-[13px] tablet:left-[21px] desktop:left-[29px] -translate-y-1/2 z-[-1]"/>
                  <div className="text-[11px] phone:text-[14px] tablet:text-[23px] desktop:text-[31px] leading-[120%]">
                    <h3 className="font-bold">Техническая сборка</h3>
                    <p className="font-normal">и тестирование воронки</p>
                  </div>
                </li>
                <li className="w-full laptop:w-[calc(100%_-_472px)] desktop:w-[calc(100%_-_636px)] rounded-[10px] phone:rounded-[14px] tablet:rounded-[22px] desktop:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] tablet:min-h-[144px] desktop:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] tablet:p-[20px_8px_20px_151px] desktop:p-[51px] desktop:pl-[203px]">
                  <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}working-icon-3?field=slug`} alt="" className="absolute w-[68px] phone:w-[91px] tablet:w-[147px] desktop:w-auto top-[2px] phone:top-[3px] tablet:top-[4px] desktop:top-[6px] left-[10px] phone:left-[13px] tablet:left-[21px] desktop:left-[29px] z-[-1]"/>
                  <div className="text-[11px] phone:text-[14px] tablet:text-[23px] desktop:text-[31px] leading-[120%]">
                    <h3 className="font-bold">Аналитика воронок конкурентов:</h3>
                    <p className="font-normal">упаковка, тексты, техничка, анализ ЦА</p>
                  </div>
                </li>
                <li className="w-full laptop:w-[450px] desktop:w-[606px] rounded-[10px] phone:rounded-[14px] tablet:rounded-[22px] desktop:rounded-[30px] bg-[rgba(242,242,242,0.14)] min-h-[67.5px] phone:min-h-[90px] tablet:min-h-[144px] desktop:min-h-[194px] relative z-[1] flex items-center p-[15px_4px_15px_70px] phone:p-[24px_5px_24px_94px] tablet:p-[20px_8px_20px_151px] desktop:p-[51px] desktop:pl-[203px]">
                  <Image width={100} height={100} unoptimized src={`${SOURCE.static_url}working-icon-6?field=slug`} alt="" className="absolute w-[68px] phone:w-[91px] tablet:w-[147px] desktop:w-auto top-[2px] phone:top-[3px] tablet:top-[4px] desktop:top-[6px] left-[10px] phone:left-[13px] tablet:left-[21px] desktop:left-[29px] z-[-1]"/>
                  <div className="text-[11px] phone:text-[14px] tablet:text-[23px] desktop:text-[31px] leading-[120%]">
                    <h3 className="font-bold">Передача доступов</h3>
                    <p className="font-normal">и сопровождение*</p>
                  </div>
                </li>
              </ul>
              <p className="text-center text-[10px] tablet:text-[17px] desktop:text-[23px] font-light leading-[120%]">
                *При сопровождении мы проводим аналитику бота <br/>
                и на основе цифр будем докручивать слабые места
              </p>
            </div>
          </section>

          <section className="mt-5">
            <div className={`${styles.container}`}>
              <h2 className="text-center font-IgraSans font-normal text-[30px] phone:text-[40px] tablet:text-[64px] laptop:text-[47px] desktop:text-[64px] leading-[120%] text-purple uppercase mb-[22px] phone:mb-[29px] tablet:mb-[47px] desktop:mb-[64px]">Что вы получите, работая с нaми:</h2>
              <ul className="max-w-[261px] phone:max-w-[348px] tablet:max-w-[558px] laptop:max-w-full mx-auto grid grid-cols-1 laptop:grid-cols-3 gap-[9px] phone:gap-5 laptop:gap-[43px_33px] desktop:gap-[43px_45px]">
                <li>
                  <a href="#" className={`flex flex-col items-start justify-end min-h-[156px] phone:min-h-[208px] tablet:min-h-[334px] laptop:min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[16px] phone:rounded-[21px] tablet:rounded-[38px] desktop:rounded-[50px] p-[23px_20px] phone:p-[32px_26px] tablet:p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <span className="flex flex-col items-start">
                      <span className="text-[8px] phone:text-[10px] tablet:text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[2px] phone:mb-[3px] tablet:mb-[5px] desktop:mb-[7px] block">01</span>
                      <span className="block text-[10px] phone:text-[14px] tablet:text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[10px] phone:mb-[14px] tablet:mb-[24px] desktop:mb-[33px]">опыт и насмотренность</span>
                      <span className="block h-[0.46px] phone:h-[0.61px] tablet:h-[1.4px] w-full bg-secondary mb-[2px] phone:mb-[3px] tablet:mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[7px] phone:text-[10px] tablet:text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Мы работаем с разными нишами и видим, кто как выстраивает воронки</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-end min-h-[156px] phone:min-h-[208px] tablet:min-h-[334px] laptop:min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[16px] phone:rounded-[21px] tablet:rounded-[38px] desktop:rounded-[50px] p-[23px_20px] phone:p-[32px_26px] tablet:p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <span className="flex flex-col items-start">
                      <span className="text-[8px] phone:text-[10px] tablet:text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[2px] phone:mb-[3px] tablet:mb-[5px] desktop:mb-[7px] block">02</span>
                      <span className="block text-[10px] phone:text-[14px] tablet:text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[10px] phone:mb-[14px] tablet:mb-[24px] desktop:mb-[33px]">Команду профессионалов</span>
                      <span className="block h-[0.46px] phone:h-[0.61px] tablet:h-[1.4px] w-full bg-secondary mb-[2px] phone:mb-[3px] tablet:mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[7px] phone:text-[10px] tablet:text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Мы увлечены своей работой и постоянно в ней развиваемся. </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex flex-col items-start justify-end min-h-[156px] phone:min-h-[208px] tablet:min-h-[334px] laptop:min-h-[482px] desktop:min-h-[647px] ${styles.bgBgColor} rounded-[16px] phone:rounded-[21px] tablet:rounded-[38px] desktop:rounded-[50px] p-[23px_20px] phone:p-[32px_26px] tablet:p-[45px] desktop:p-[61.5px] font-Manrope`}>
                    <span className="flex flex-col items-start">
                      <span className="text-[8px] phone:text-[10px] tablet:text-[18px] desktop:text-[25px] leading-[120%] font-medium text-secondary mb-[2px] phone:mb-[3px] tablet:mb-[5px] desktop:mb-[7px] block">03</span>
                      <span className="block text-[10px] phone:text-[14px] tablet:text-[24px] desktop:text-[34px] leading-[120%] font-bold uppercase mb-[10px] phone:mb-[14px] tablet:mb-[24px] desktop:mb-[33px]">Снижение затрат</span>
                      <span className="block h-[0.46px] phone:h-[0.61px] tablet:h-[1.4px] w-full bg-secondary mb-[2px] phone:mb-[3px] tablet:mb-[24px] desktop:mb-[33px]"></span>
                      <span className="text-[7px] phone:text-[10px] tablet:text-[16px] desktop:text-[22px] font-normal text-secondary leading-[120%]">Освободим менеджеров от рутины, настроим приём платежей и т.д</span>
                    </span>
                  </a>
                </li>
              </ul>
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

          <CallBackBlock />
        </main>
      </div>
    )
}