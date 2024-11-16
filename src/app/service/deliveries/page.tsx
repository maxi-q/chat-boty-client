import Image from 'next/image'

import { CallToActionButton } from "@/components/ui/CallToAction"
import { SOURCE } from "@/constants/static"

import styles from './styles.module.css'

const Page = () => {
  return <main>
    <section className={`flex flex-col items-center text-center ${styles.container_first} pt-5 phone:pt-8 tablet:pt-11 laptop:pt-11 desktop:pt-16 `}>
      <h1 className='text-2xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-6xl leading-tight uppercase font-IgraSans'>Массовые рассылки<br/>в мессенджерах и соцсетях</h1>
      <h3 className='text-xs phone:text-sm tablet:text-xl laptop:text-2xl desktop:text-3xl my-5 phone:my-6 tablet:my-8 laptop:my-5 desktop:my-9 font-medium'>Достучимся до вашей базы <br className='laptop:hidden'/>через Телеграм/WhatsApp</h3>
      <CallToActionButton textClassName="p-0">
        ОСТАВИТЬ ЗАЯВКУ
      </CallToActionButton>
      <Image width={605} height={434} src={`${SOURCE.static_url}mailingsmain?field=slug`} alt={`Фото image`} className={`select-none mt-4 ms-[-80px]`} />
    </section>
    <section className={`flex flex-col items-center text-center ${styles.container} pt-5 phone:pt-8 tablet:pt-11 laptop:pt-11 desktop:pt-16 `}>
      <h1 className='text-2xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-6xl leading-tight uppercase font-IgraSans mb-12 text-nowrap'>Что мы делаем:</h1>
      <div className='flex gap-14 justify-center text-left items-stretch flex-col laptop:flex-row'>
        <div className={`p-4 phone:p-5 tablet:p-9 laptop:p-9 desktop:p-16 ${styles.blue_container} rounded-3xl`}>
          <h3 className='text-nowrap text-sm phone:text-lg tablet:text-3xl laptop:text-3xl desktop:text-4xl font-medium mb-12'>Рассылки в телеграмм</h3>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl mb-6'><span className='font-medium'>Парсим аудиторию</span> из каналов/чатов</h4>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl mb-6'><span className='font-medium'>Проверяем наличие</span> ТГ по номеру телефона</h4>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl mb-6'><span className='font-medium'>Отправляем сообщение</span> пользователю <br/> либо делаем репост в ЛС</h4>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl'><span className='font-medium'>Рандомизируем текст</span> для уменьшения <br/> вероятности попасть в спам</h4>
        </div>
        <div className={`p-4 phone:p-5 tablet:p-9 laptop:p-9 desktop:p-16 ${styles.green_container} rounded-3xl`}>
          <h3 className='text-nowrap text-sm phone:text-lg tablet:text-3xl laptop:text-3xl desktop:text-4xl font-medium mb-12'>Рассылки в WhatsApp</h3>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl mb-6'><span className='font-medium'>Проверка номеров</span> телефонов</h4>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl mb-6'><span className='font-medium'>Рандомизируем</span> ваш текст</h4>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl mb-6'><span className='font-medium'>Отправляем рассылку</span></h4>
          <h4 className='text-nowrap text-xs phone:text-xs tablet:text-base laptop:text-base desktop:text-xl'><span className='font-medium'>Создаём цепочки</span> писем</h4>
        </div>

      </div>
    </section>
    <section className={`flex flex-col items-center text-center ${styles.container} ${styles.black_container} pt-5 phone:pt-8 tablet:pt-11 laptop:pt-11 desktop:pt-16`}>
      <h1 className='text-white text-2xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-6xl leading-tight uppercase font-IgraSans mb-12'><span className="relative phone:left-4 left-2">д</span> ля чего <span className='text-nowrap'>нужны рассылки</span></h1>
    </section>
  </main>
}

export default Page