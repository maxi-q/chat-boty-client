const VKPlayerComponent = ({ oid, id }: { oid: string; id: string }) => (
  <iframe
    src={`https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2&autoplay=1`}
    width="853"
    height="480"
    allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
    frameBorder="0"
    loading="lazy"
    allowFullScreen
  />
)
 export default VKPlayerComponent