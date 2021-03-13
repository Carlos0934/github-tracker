import { RepositoryDetail } from '../../modules/repository'
import { UserDetail } from '../../modules/user'

export type GithubUserAction =
{
  type : 'SET_USER',
  user? : UserDetail
  loading? : boolean
}|
{
  type : 'SET_REPOSITORY'
  repository? : RepositoryDetail
  loading? : boolean
}|
{
  type : 'REFRESH'
}
