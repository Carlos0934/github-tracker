import { Entity } from './entity'
import { PageConsumer, Page } from './pageConsumer'

export abstract class HttpPageConsumer<T extends Entity> implements PageConsumer<T> {
  constructor (protected url : string, protected config? : { token : string}) {

  }

  protected abstract getPageParameters(page : Page) : string
  abstract findByQuery(page : Page) : Promise<T[]>
  async findByPage (page: Page): Promise<T[]> {
    const res = await fetch(this.url + '?' + this.getPageParameters(page), this.config && {
      headers: {
        Authorization: this.config.token
      }
    })

    const result = await res.json()
    return result
  }

  async find (id: number | string): Promise<T | undefined> {
    const res = await fetch(this.url + '/' + id, this.config && {
      headers: {

        Authorization: this.config.token
      }
    })
    const result = await res.json()

    return result
  }
}
