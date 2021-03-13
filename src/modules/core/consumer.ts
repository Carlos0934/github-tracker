
export interface Consumer<T> {
    find(id : number | string) : Promise<T| undefined>
}
