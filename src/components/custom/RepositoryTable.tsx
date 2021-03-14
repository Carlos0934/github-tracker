import { useGithubUser } from '../../contexts/githubUser/context'
import { RepositoryConsumer } from '../../modules/repository/repositoryConsumer'
import ConsumerTable from './ConsumerTable'

interface RepositoryTableProps {

}
const RepositoryTable : React.FC<RepositoryTableProps> = () => {
  const { selectedUser, setRepository } = useGithubUser()

  if (!selectedUser) return <></>
  return (
    <ConsumerTable
      tableSize = 'small'
      consumer = {new RepositoryConsumer(selectedUser.login)}
      onSelected = {({ name }) => setRepository(name) }
      title = 'Repositories'
      cols = {[
        {
          name: 'Name',
          key: 'name'
        },
        {
          name: 'Stars',
          key: 'stargazers_count',
          center: true
        },
        {
          name: 'Forks',
          key: 'forks',
          center: true
        }

      ]}
    />
  )
}

export default RepositoryTable
