const VKPlayerComponent = ({ oid, id }: { oid: string; id: string }) => (
  <iframe
    width="720"
    height="405"
    src={`https://rutube.ru/play/embed/${id}/?skinColor=43a047`}
    allow="clipboard-write; autoplay"
    allowFullScreen
  ></iframe>
)
export default VKPlayerComponent
