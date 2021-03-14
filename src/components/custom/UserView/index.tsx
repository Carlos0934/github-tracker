import { useEffect } from 'react'
import { useGithubUser } from '../../../contexts/githubUser/context'
import RepositoryViewModal from '../RepositoryViewModal'
import Spinner from '../Spinner'
import UserCard from '../UserCard'

const UserView : React.FC = () => {
  const { selectedUser, userLoading } = useGithubUser()

  useEffect(() => {

  }, [selectedUser])

  if (!selectedUser) return <> </>
  if (userLoading) return <Spinner/>
  return (
        <div>
           <UserCard user = {selectedUser}/>
           <RepositoryViewModal />
        </div>
  )
}

export default UserView
