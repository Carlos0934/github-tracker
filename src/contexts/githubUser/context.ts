import { createContext, useContext } from 'react'
import { RepositoryDetail } from '../../modules/repository'
import { UserDetail } from '../../modules/user'

export interface GithubUserState {
    selectedUser? : UserDetail
    selectedRepository? : RepositoryDetail
    repoLoading? : boolean
    userLoading? : boolean

    setUser(id : string | number) : Promise<void>
    setRepository(id : string | number) : Promise<void>
    refresh() : void
}

export const defaultGithubUserState : GithubUserState = {
  setRepository: () => Promise.resolve(),
  setUser: () => Promise.resolve(),
  refresh: () => null
}

export const GithubUserContext = createContext<GithubUserState>(defaultGithubUserState)
export const useGithubUser = () => useContext(GithubUserContext)
