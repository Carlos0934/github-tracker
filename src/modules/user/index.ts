
import { Entity } from '../core/entity'

export interface User extends Entity {
  login : string
  avatar_url : string
}

export interface UserDetail extends User {
  email : string
  address : string
  url : string
  name : string
  blog : string
  followers : number
  following : number
  public_repos : number
  public_gists : number
  bio : string
}
