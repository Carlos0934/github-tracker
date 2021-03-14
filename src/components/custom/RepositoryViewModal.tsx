import { useGithubUser } from '../../contexts/githubUser/context'
import { formatNumber } from '../../utils/format'
import Link from '../common/Link'
import Card from '../styled/Card'
import CardBody from '../styled/Card/Body'
import CardHeader from '../styled/Card/Header'
import Modal from '../styled/Modal'
import Split from '../styled/Split'
import NotAvailable from './NotAvailable'
import TimeAgo from './TimeAgo'

const RepositoryViewModal : React.FC = () => {
  const { selectedRepository, refresh } = useGithubUser()
  if (!selectedRepository) return <></>
  return (
    <Modal open = {true} onClose = {refresh }>
        <Card>
            <CardHeader>
                <h3>{selectedRepository.name}</h3>
            </CardHeader>
            <CardBody>
                <Split>

                    <div>
                        <h4>Main Lenguage: <i>{selectedRepository.language ?? 'None'}</i> </h4>
                        <h4>⭐ <i>{ formatNumber(selectedRepository.stargazers_count)}</i> </h4>

                    </div>
                    <div>
                        <h4> <i>  Created <TimeAgo date = {selectedRepository.created_at}/></i> </h4>
                        <h4>🍴  <i>{formatNumber(selectedRepository.forks)}</i> </h4>
                    </div>

                </Split>
                <div style = {{ width: '100%' }} >
                    <h4>Description</h4>
                            {
                            selectedRepository.description
                              ? <p>{selectedRepository.description }</p>
                              : <NotAvailable/>

                            }
                </div>

                <Link href = {selectedRepository.html_url} target = '_blank' rel = 'noreferrer' >See Repository</Link>
            </CardBody>
        </Card>
    </Modal>
  )
}
export default RepositoryViewModal
