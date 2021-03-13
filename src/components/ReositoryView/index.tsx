import { useGithubUser } from '../../contexts/githubUser/context'
import Spinner from '../custom/Spinner'
import Modal from '../styled/Modal'

export const RepositoryView : React.FC = () => {
  const { repoLoading, selectedRepository } = useGithubUser()
  if (!selectedRepository) return <></>
  if (repoLoading) { return <Spinner /> }
  return (
        <Modal>
            <h3>{selectedRepository.name}</h3>
        </Modal>
  )
}
