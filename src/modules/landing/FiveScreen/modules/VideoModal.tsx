import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'

export const VideoModal = ({ show, oid, id, closePopup, image }: { show: boolean; oid: string; id: string; closePopup: () => void; image: string }) => {
  return (
    <PopUp show={show} className="">
      <div className={'flex flex-col items-center '}>
        <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
        {/* <iframe
          src={`https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2`}
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        <iframe
          src={`https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2&autoplay=1`}
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        {/* <iframe
          className='max-w-[840px] max-h-[500px] w-[80vw] h-[50vw]'
          width="100%"
          height="100%"
          src={src}
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}
          html,body{height:100%}
          img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
          span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
          </style>
          <a href=${src}?si=Oyvu7VQgch-unNDs?autoplay=1>
          <img src=${image} alt='Demo video'>
          <span>▶</span>
          </a>`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Demo video"
        /> */}
      </div>
    </PopUp>
  )
}
