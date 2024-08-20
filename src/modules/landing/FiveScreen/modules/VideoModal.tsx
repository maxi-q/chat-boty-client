import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'

export const VideoModal = ({ show, oid, id, closePopup, image }: { show: boolean; oid: string; id: string; closePopup: () => void; image: string }) => {
  return (
    <PopUp show={show} className="">
      <div className={'flex flex-col items-center '}>
        <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
        <iframe
          src={`https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2&autoplay=1`}
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </PopUp>
  )
}
