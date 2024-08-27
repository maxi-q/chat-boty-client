import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'
import dynamic from 'next/dynamic';

const LazyVKPlayer = dynamic(() => import('./components//ui/VKPlayerComponent'), {
  ssr: false,
});


export const VideoModal = ({ show, oid, id, closePopup, image }: { show: boolean; oid: string; id: string; closePopup: () => void; image: string }) => {
  return (
    <PopUp show={show} className="">
      <div className={`flex flex-col items-center`}>
        <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
        <LazyVKPlayer oid={oid} id={id} />
      </div>
    </PopUp>
  )
}
