import { Entity } from '../core/entity'

export interface Repository extends Entity {
    name : string

    watchers : number
    stargazers_count : number
}

export interface RepositoryDetail extends Repository {
    language : string
    subscribers_count : number
    forks : number
    created_at : string
}
