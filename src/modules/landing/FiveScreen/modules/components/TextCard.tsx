import Image from 'next/image'

import styles from './style.module.css'
import { Card } from './ui/Card'
import { Splitter } from './ui/Splitter'

interface ITextCard {
  title: string
  text: string
  company: string
  name: string
  avatar: string
  authorLink: string
}

export const TextCard = ({ title, text, company, name, avatar, authorLink }: ITextCard) => {
  return (
    <Card className="flex flex-col h-auto">
      <h3 className={`phone:text-lg tablet:text-2xl font-bold uppercase phone:mb-4 tablet:mb-10 tracking-wide h-[76px] laptop:h-[96px] whitespace-pre-line ${styles.cardTitle}`}>{title}</h3>
      <p
        className={`text-base tablet:text-lg leading-6 font-medium whitespace-normal laptop:whitespace-pre-wrap ${styles.cardText}`}
        style={{ letterSpacing: '4%' }}
      >
        {text}
      </p>
      <div className="mt-5 flex-1 flex flex-col justify-end">
        <Splitter />
        <div className="flex gap-[28px] items-center">
          <div className={`${styles.avatar} rounded-full overflow-hidden`}>
            <Image src={avatar} width={50} height={50} alt={company} />
          </div>
          <div className="">
            <h5 className="uppercase">{company}</h5>
            <a target="_blank" href={authorLink} className={`text-sm underline ${styles.cardName}`}>
              {name}
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
