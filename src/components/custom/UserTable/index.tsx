
import { useRef } from 'react'
import { useGithubUser } from '../../../contexts/githubUser/context'
import { UserConsumer } from '../../../modules/user/userConsumer'
import Avatar from '../Avatar'
import ConsumerTable from '../ConsumerTable'

type UserTableProps = {

}
export const UserTable : React.FC<UserTableProps> = () => {
  const { setUser } = useGithubUser()
  const userConsumerRef = useRef(new UserConsumer())
  return (
    <ConsumerTable consumer = {userConsumerRef.current} searchable onSelected = {({ login }) => setUser(login) } cols = {[
      {
        name: 'Avatar',
        key: 'avatar_url',
        content: ({ avatar_url }) => <Avatar src = {avatar_url} />,
        center: true
      },
      {
        name: 'Username',
        key: 'login'
      }
    ]} />
  )
}
