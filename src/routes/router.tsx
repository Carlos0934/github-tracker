
import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router'

const Home = lazy(() => import('../pages/Home'))
export const Router : React.FC = () => (

    <Switch>
        <Suspense fallback = {'loading'}>
            <Route path = '/' exact>
                <Home/>
            </Route>
        </Suspense>

    </Switch>
)
