'use client'

import Link from "next/link";

import styles from './styles.module.css'
import Clock from "@/constants/svg/Clock";
import { Container } from "./components";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const Kanban = () => {
  return (
    <div className="w-full bg-orange-600 flex gap-3">
      <DndProvider backend={HTML5Backend}>
					<Container />
      </DndProvider>
    </div>
  )
}

interface Card {
  date?: string;
  title?: string;
  text?: string;
  describe?: string;
  link?: string
}

const Card = ({ date='', title='', text='', describe='', link='' }: Card) => {
  return (
    <Link href={link} className={`rounded-xl p-6 laptop:p-8 h-max w-full laptop:w-[300px] laptop:h-[350px] desktop:w-[408px] desktop:h-[500px] flex flex-col ${styles.card}`}>
      <h5 className="text-xs select-none">{date}</h5>
      <Splitter />
      <h3 className={`mb-4 text-md desktop:text-2xl leading-snug uppercase font-medium ${styles.textTitle}`}>{title}</h3>
      <h4 className={`text-sm desktop:text-lg ${styles.text}`}>{text}</h4>
      <Splitter />
      <div className="flex items-center">
        <Clock />
        <h4 className="text-xs ml-2 desktop:text-base select-none">{describe}</h4>
      </div>
    </Link>
  )
}

const Splitter = () => <div className={`${styles.splitter} my-5 spltr`} />