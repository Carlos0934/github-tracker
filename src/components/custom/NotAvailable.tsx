const generateSadEmoji = () : string => {
  const emojis = ['😢', '😭', '😞', '😓', '😥', '😔', '☹', '😖', '😡', '😿', '😾']
  const selectedEmoji = Math.ceil(Math.random() * (emojis.length - 1))
  return emojis[selectedEmoji]
}
const NotAvailable : React.FC = () => <> <i> No Available</i> {generateSadEmoji()} </>

export default NotAvailable
