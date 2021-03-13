import { Entity } from './entity'
import { HttpPageConsumer } from './httpPageConsumer'
import { Page } from './pageConsumer'

export abstract class GithubPageConsumer<T extends Entity> extends HttpPageConsumer<T> {
  protected resource : string
  constructor (url : string) {
    super('https://api.github.com' + url, { token: process.env.REACT_APP_TOKEN ?? '' })
    this.resource = url
  }

  getPageParameters (page : Page) {
    return encodeURI(`q=${page.query}&per_page=${page.size}&page=${page.page}`)
  }

  async findByQuery (page : Page) {
    const res = await fetch(`https://api.github.com/search${this.resource}?${this.getPageParameters(page)}`, this.config && {
      headers: {
        Authorization: this.config.token
      }
    })

    const result = await res.json()
    return result.items ?? []
  }
}
