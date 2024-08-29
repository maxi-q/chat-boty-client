import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import styles from './style.module.css'

export const Modal = ({ isOpen, closePopup }: { isOpen: boolean; closePopup: () => void }) => {
  return (
    <PopUp show={isOpen}>
      <div className={'flex flex-col items-center w-[360px]'}>
        <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
        <h1 className={`text-4xl uppercase pb-3 ${styles.gratitudeTitle}`}>спасибо!</h1>
        <h3 className={`font-bold tracking-widest leading-5 uppercase text-base text-center ${styles.gratitudeSubtitle}`}>
          мы с вами свяжемся <br /> в течение 2 часов
        </h3>
      </div>
    </PopUp>
  )
}
