import { useGithubUser } from '../../../contexts/githubUser/context'
import { RepositoryConsumer } from '../../../modules/repository/repositoryConsumer'
import ConsumerTable from '../ConsumerTable'

interface RepositoryTableProps {

}
const RepositoryTable : React.FC<RepositoryTableProps> = () => {
  const { selectedUser, setRepository } = useGithubUser()

  if (!selectedUser) return <p>User required</p>
  return (
    <ConsumerTable
      consumer = {new RepositoryConsumer(selectedUser.login)}
      onSelected = {({ name }) => setRepository(name) }
      cols = {[
        {
          name: 'Name',
          key: 'name'
        },
        {
          name: 'Watchers',
          key: 'watchers'
        },
        {
          name: 'Stars ⭐',
          key: 'stargazers_count'
        }

      ]}
    />
  )
}

export default RepositoryTable
