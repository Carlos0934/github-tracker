
import { useReducer, useRef } from 'react'
import { defaultGithubUserState, GithubUserContext } from '../../contexts/githubUser/context'
import { githubUserReducer } from '../../contexts/githubUser/reducer'
import { RepositoryDetail } from '../../modules/repository'
import { RepositoryConsumer } from '../../modules/repository/repositoryConsumer'
import { UserDetail } from '../../modules/user'
import { UserConsumer } from '../../modules/user/userConsumer'

const GithubUserContextProvider : React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(githubUserReducer, defaultGithubUserState)
  const userConsumerRef = useRef(new UserConsumer())

  const setUser = async (id : string | number) => {
    dispatch(
      {
        type: 'SET_USER',
        loading: true
      }
    )
    const user = await userConsumerRef.current.find(id) as UserDetail

    dispatch(
      {
        type: 'SET_USER',
        user,
        loading: false
      }
    )
  }
  const setRepository = async (id : string | number) => {
    if (!state.selectedUser) { return }
    const repoConsumer = new RepositoryConsumer(state.selectedUser.login)
    dispatch(
      {
        type: 'SET_REPOSITORY',
        loading: true
      }
    )
    const repository = await repoConsumer.find(id) as RepositoryDetail
    dispatch(
      {
        type: 'SET_REPOSITORY',
        repository,
        loading: false
      }
    )
  }
  const refresh = () => {
    dispatch({ type: 'REFRESH' })
  }
  return (
    <GithubUserContext.Provider value = {{ ...state, setRepository, setUser, refresh }}>
      {
        children
      }
    </GithubUserContext.Provider>

  )
}

export default GithubUserContextProvider
