import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Entity } from '../../modules/core/entity'
import { Page, PageConsumer } from '../../modules/core/pageConsumer'
import Input from '../common/Input'
import Select from '../common/Select'
import StyledTable, { TableSize } from '../styled/TableStyled'
import Spinner from './Spinner'

type ConsumerTableCol<T extends object> = {
  key : string
  name : string
  center? : boolean

  content? : (entity : T) => React.ReactNode

}
type ConsumerTableProps<T extends Entity> = {
  cols : ConsumerTableCol<T>[]
  consumer : PageConsumer<T>
  tableSize? : TableSize
  initialSize? : number
  onSelected? : (entity : T) => void

  searchable? : boolean
  resizeable? : boolean
  title? : string

}

function ConsumerTable<T extends Entity> ({ cols, consumer, tableSize, initialSize = 10, onSelected, searchable, title, resizeable } : ConsumerTableProps<T>) {
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
  }, [query, size])
  useEffect(() => {
    if (loading || !inView || (isEmpty && searchable)) return
    addData()
  }, [inView, loading, isEmpty])
  return (
    <div>
        <h3>{title}</h3>
      <div className = 'header-actions'>
        {
        resizeable && <Select onChange = {(e) => setSize(Number(e.currentTarget.value))}>
          <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        </Select>
        }
        {
          searchable && <Input placeholder = 'Search' type="text" onChange = {(e) => inputChange(e.currentTarget.value) } value = {query}/>
        }

      </div>

    <StyledTable size = {tableSize} >

        <thead>
         <tr>
          {
            cols.map((col, key) => <th key = {key} className = { col.center ? 'col-center' : '' } >{col.name}</th>)
          }
         </tr>
        </thead>
        <tbody className = 'body'>
            {
              loading
                ? <Spinner />
                : entities.map((entity, i) => <tr key = {i} onClick = {() => onSelected?.(entity) }>
                    {
                      cols.map((col, key) => <td className = { col.center ? 'col-center' : '' } key = {key} >{ col.content ? col.content(entity) : (entity as any)[col.key] }</td>)
                    }
                </tr>
                )
            }
            <div ref = {ref}></div>
        </tbody>

    </StyledTable>

    </div>
  )
}

export default ConsumerTable
