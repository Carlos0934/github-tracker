import { Reducer } from 'react'
import { GithubUserAction } from './actions'
import { GithubUserState } from './context'
export const githubUserReducer : Reducer<GithubUserState, GithubUserAction> = (state : GithubUserState, action : GithubUserAction) : GithubUserState => {
  switch (action.type) {
    case 'REFRESH':
      return { ...state, selectedUser: undefined, selectedRepository: undefined }
    case 'SET_USER':
      return { ...state, selectedUser: action.user, userLoading: action.loading }

    case 'SET_REPOSITORY':
      return { ...state, selectedRepository: action.repository, repoLoading: action.loading }
  }
}
