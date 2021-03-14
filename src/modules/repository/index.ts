import { Entity } from '../core/entity'

export interface Repository extends Entity {
    name : string
    forks : number
    stargazers_count : number
}

export interface RepositoryDetail extends Repository {
    language : string
    subscribers_count : number
    created_at : string
    html_url : string
    description? : string
}
