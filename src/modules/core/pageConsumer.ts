import { Consumer } from './consumer'
import { Entity } from './entity'

export interface Page {
   page : number
   size : number
   query? : string
}
export interface PageConsumer<T extends Entity> extends Consumer<T> {
    findByPage(page : Page) : Promise<T[]>
    findByQuery(page : Page) : Promise<T[]>
}
