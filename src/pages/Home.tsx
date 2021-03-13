
import RepositoryTable from '../components/custom/RepostoryTable'
import { UserTable } from '../components/custom/UserTable'
import UserView from '../components/custom/UserView'
import Panel from '../components/layout/panel'
import GithubUserContextProvider from '../components/providers/GithubUserContext'
import Card from '../components/styled/Card'

const Home : React.FC = () => (
    <GithubUserContextProvider>
        <Panel>

        <UserTable/>

            <Card>
                <UserView />
                <RepositoryTable/>

            </Card>

        </Panel>

    </GithubUserContextProvider>
)

export default Home
