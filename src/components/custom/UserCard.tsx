import { UserDetail } from '../../modules/user'
import { formatNumber } from '../../utils/format'
import Card from '../styled/Card'
import CardBody from '../styled/Card/Body'
import CardHeader from '../styled/Card/Header'
import Split from '../styled/Split'
import Avatar from './Avatar'
import NotAvailable from './NotAvailable'
import RepositoryTable from './RepositoryTable'

type UserCardProps = {
    user : UserDetail
}

const UserCard : React.FC<UserCardProps> = ({ user }) => {
  return (
  <Card>
    <CardHeader>
      <Avatar size = 'big' src = {user.avatar_url} className = 'avatar' />
      <h1 >{user.login}</h1>

    </CardHeader>
    <CardBody>
      <Split>
        <div>
          <h4> Name: <i>{user.name}</i> {user.bio}</h4>
          <h4> Repositories:  { formatNumber(user.public_repos)}</h4>
          <h4> Followers:  { formatNumber(user.followers) }</h4>
          <h4>Following: {formatNumber(user.following)}</h4>
        </div>
        <div>
          <h4>Gists: {formatNumber(user.public_gists)}</h4>
          <h4> Email:  { user.email ? <i> {user.email} </i> : <NotAvailable/>}</h4>
          <h4> Address:  { user.address ? <i> {user.address} </i> : <NotAvailable/>}</h4>
          <h4>Blog: { user.blog ? <a target = '_blank' rel = 'noreferrer' href={user.blog}>{user.blog}</a> : <NotAvailable/>} </h4>
        </div>
      </Split>
      <RepositoryTable/>
    </CardBody>

  </Card>

  )
}

export default UserCard
