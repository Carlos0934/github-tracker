import { Repository } from '.'
import { GithubPageConsumer } from '../core/githubPageConsumer'
import { Page } from '../core/pageConsumer'

export class RepositoryConsumer extends GithubPageConsumer<Repository> {
  constructor (protected userLogin : string) {
    super(`/users/${userLogin}/repos`)
  }

  async find (id : number | string) : Promise<Repository | undefined> {
    const res = await fetch(`https://api.github.com/repos/${this.userLogin}/${id}`, this.config && {
      headers: {

        Authorization: this.config.token
      }
    })
    const result = await res.json()

    return result
  }

  async findByQuery ({ page, query, size } : Page) : Promise<Repository[]> {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=${query}user:${this.userLogin}&sort=stars&order=desc&page=${page}&per_page=${size}`
      , this.config && {
        headers: {
          Authorization: this.config.token
        }
      })

    const result = await res.json()
    return result.items ?? []
  }
}
