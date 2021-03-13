import { UserDetail } from '../../../modules/user'
import Card from '../../styled/Card'
import Avatar from '../Avatar'

type UserCardProps = {
    user : UserDetail
}
const UserCard : React.FC<UserCardProps> = ({ user }) => {
  return (
        <Card>
            <Avatar src = {user.avatar_url} className = 'avatar' />
            <h3 className = 'title'>{user.login}</h3>
        </Card>
  )
}

export default UserCard
