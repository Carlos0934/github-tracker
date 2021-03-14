import styled, { css } from 'styled-components'
export type TableSize = 'small' | 'medium' | 'big';
type StyledTableProps = {
  size? : TableSize
}
const StyledTable = styled.table<StyledTableProps>`


  & {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    --row-color: transparent;
  }
  &, thead {
    
    flex: 0 0 auto;
    width: calc(100% - 0.9em);
  }
  tbody {
    
    flex: 1 1 auto;
    display: block;
    scrollbar-width: thin;        
    scrollbar-color: #8b8b8b #fff ;
    overflow-y: scroll;
    height: 100%;
    ${props => props.size === 'small' && css`
      height: 350px;
    `}
    ${props => props.size === 'medium' && css`
      height: 450px;
      
    `}
    ${props => props.size === 'big' && css`
      height: 600px;
    `}
    
  }
  tbody tr {
    width: 100%;
  }
  thead, tbody tr {
    display: table;
    table-layout: fixed;
  }

  .col-center {
    text-align: center;
  }



  tbody tr {
   
    background-color: var(--row-color);
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
  }
 
  tbody tr:nth-child(even) {
    --row-color:#e4e2e2;
    
  }
  tbody tr:hover {
    --row-color: #d8d8d8;
  }
  
  tbody tr:active {
    --row-color: #aaaaaa;
  }
  
 td, th {

  text-align: left;
  padding: 10px;
  width: 100%;
   
 }
 thead{
  border-bottom: #a1a1a1 1px solid;
 }

`

export default StyledTable
