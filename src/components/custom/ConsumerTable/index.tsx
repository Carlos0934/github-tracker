import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Entity } from '../../../modules/core/entity'
import { Page, PageConsumer } from '../../../modules/core/pageConsumer'
import StyledTable from '../../styled/TableStyled'
import Spinner from '../Spinner'

type ConsumerTableCol<T extends object> = {
  key : string
  name : string
  center? : boolean
  content? : (entity : T) => React.ReactNode

}
type ConsumerTableProps<T extends Entity> = {
  cols : ConsumerTableCol<T>[]
  consumer : PageConsumer<T>
  initialSize? : number
  onSelected? : (entity : T) => void
  sorteable? : boolean
  searchable? : boolean
  resizeable? : boolean

}

function ConsumerTable<T extends Entity> ({ cols, consumer, initialSize = 10, onSelected, searchable, sorteable, resizeable } : ConsumerTableProps<T>) {
  const [entities, setEntities] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(initialSize)
  const [query, setQuery] = useState<string>('')
  const { inView, ref } = useInView()
  const findData = async () => {
    setLoading(true)
    const result = await findPage({ page: 0, size, query })
    setEntities(result)
    setPage(0)
    setLoading(false)
  }
  const addData = async () => {
    const result = await consumer.findByQuery({ page: page + 1, size, query })
    if (result.length > 0) {
      setEntities([...entities, ...result])
      setPage(page + 1)
    }
  }
  const inputChange = (value : string) => {
    setQuery(value)
  }

  const isEmpty = !query || query === '' || query.trim() === ''
  const findPage = async (page : Page) => isEmpty
    ? await consumer.findByPage(page)
    : await consumer.findByQuery(page)

  useEffect(() => {
    findData()
  }, [query])
  useEffect(() => {
    if (loading || !inView || (isEmpty && searchable)) return
    addData()
  }, [inView, loading, isEmpty])
  return (
    <div>
    {
      resizeable && <select onChange = {(e) => setSize(Number(e.currentTarget.value))}>
      <option value="20">20</option>
      <option value="50">50</option>
      </select>
    }
    {
      searchable && <input type="text" onChange = {(e) => inputChange(e.currentTarget.value) } value = {query}/>
    }

    <StyledTable>
        <thead>
         <tr>
          {
            cols.map((col, key) => <th key = {key} className = { col.center ? 'row-center' : '' } >{col.name}</th>)
          }
         </tr>
        </thead>
        <tbody className = 'body'>
            {
              loading
                ? <Spinner/>
                : entities.map((entity, i) => <tr key = {i} onClick = {() => onSelected?.(entity) }>
                    {
                      cols.map((col, key) => <td key = {key} >{ col.content ? col.content(entity) : (entity as any)[col.key] }</td>)
                    }
                </tr>
                )
            }

        </tbody>
        <tfoot ref = {ref}>

        </tfoot>
    </StyledTable>

    </div>
  )
}

export default ConsumerTable
