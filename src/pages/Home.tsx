
import { UserTable } from '../components/custom/UserTable'
import UserView from '../components/custom/UserView'
import Panel from '../components/layout/panel'
import GithubUserContextProvider from '../components/providers/GithubUserContext'

const Home : React.FC = () => (
    <GithubUserContextProvider>
        <Panel>
            <div>
                <UserTable/>
            </div>

            <div>
                <UserView />

            </div>

        </Panel>

    </GithubUserContextProvider>
)

export default Home
