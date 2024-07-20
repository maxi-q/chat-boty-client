import { PopUp } from '@/components/ui/PopUp'
import CloseMainPopUp from '@/constants/svg/CloseMainPopUp'

export const VideoModal = ({ show, src, closePopup }: { show: boolean; src: string; closePopup: () => void }) => {
  return (
    <PopUp show={show}>
      <div className={'flex flex-col items-center'}>
        <CloseMainPopUp className={'fixed'} style={{ right: '20px', top: '20px' }} onClick={closePopup} />
        <iframe
          width="560"
          height="315"
          src={src}
          srcDoc={`<style>*{padding:0;margin:0;overflow:hidden}
        html,body{height:100%}
        img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
        span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
        </style>
        <a href=${src}?si=Oyvu7VQgch-unNDs?autoplay=1>
        <img src=https://img.youtube.com/vi/li_9PBrcOcQ/hqdefault.jpg alt='Demo video'>
        <span>▶</span>
        </a>`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Demo video"
        />
      </div>
    </PopUp>
  )
}