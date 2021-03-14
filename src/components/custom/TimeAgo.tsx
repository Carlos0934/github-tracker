
import useTimeAgo, { ValidDate } from '../../hooks/useTimeAgo'

type TimeAgoProps = {
    date : ValidDate
}
const TimeAgo : React.FC<TimeAgoProps> = ({ date }) => {
  const formatTimeAgo = useTimeAgo(date)
  return (
        <time>{formatTimeAgo}</time>
  )
}

export default TimeAgo
