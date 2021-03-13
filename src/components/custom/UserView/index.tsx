import { useEffect } from 'react'
import { useGithubUser } from '../../../contexts/githubUser/context'

import Avatar from '../Avatar'
import Spinner from '../Spinner'

const UserView : React.FC = () => {
  const { selectedUser, userLoading } = useGithubUser()

  useEffect(() => {

  }, [selectedUser])

  if (!selectedUser) return <p>User not provided</p>
  if (userLoading) return <Spinner/>
  return (
        <div>
            <Avatar src = {selectedUser.avatar_url}/>
            <h3>{selectedUser.login}</h3>
            <h4>You can see his blog there {selectedUser.blog}</h4>
            <h4>Name {selectedUser.name}</h4>
            <h4>Address {selectedUser.address}</h4>
            <h4>Email {selectedUser.email}</h4>
            <h4>Followers {selectedUser.followers} 🥳</h4>
            <h4>Are following {selectedUser.following} peoples 🤩</h4>
            <h4>Gists {selectedUser.public_gists} ⭐ </h4>
            <h4>Repositories {selectedUser.public_repos} 🏎</h4>
        </div>
  )
}

export default UserView
