import { User } from '.'
import { GithubPageConsumer } from '../core/githubPageConsumer'
import { Page } from '../core/pageConsumer'

export class UserConsumer extends GithubPageConsumer<User> {
  constructor () {
    super('/users')
  }

  async findByPage (page : Page) : Promise<User[]> {
    const res = await fetch(`${this.url}?since=${page.page * page.size}&per_page=${page.size}`, this.config && {
      headers: {
        Authorization: this.config.token
      }
    })
    const result = await res.json()
    return result
  }

  async findByQuery (page : Page) : Promise<User[]> {
    page.page += 1
    try {
      const result = await super.findByQuery(page)
      return result
    } catch (error) {
      return []
    }
  }
}
