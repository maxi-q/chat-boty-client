import Image from 'next/image'

import { CallToActionButton } from "@/components/ui/CallToAction"
import { SOURCE } from "@/constants/static"

const Page = () => {
    return <main>
        <section className="flex flex-col items-center text-center">
            <h1 className='text-5xl uppercase font-IgraSans'>Массовые рассылки<br/>в мессенджерах и соцсетях</h1>
            <h3 className='text-lg font-medium'>Достучимся до вашей базы через Телеграм/WhatsApp</h3>
            <CallToActionButton textClassName="p-0 !left-0">
                ОСТАВИТЬ ЗАЯВКУ
            </CallToActionButton>
            <Image width={605} height={434} src={`${SOURCE.static_url}mailingsmain?field=slug`} alt={`Фото image`} className={`select-none `} />
        </section>
    </main>
}

export default Page