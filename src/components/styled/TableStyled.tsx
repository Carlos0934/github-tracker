import styled from 'styled-components'

const StyledTable = styled.table`

 .row-center {
   display: flex;
   justify-content: center;
    
   
 }
 
 & {
   border-collapse: collapse;
   width: 100%;
 }

 &,th, td {
   border: 2px solid #ddd;
  text-align: left;
   
 }
 th,td {
   padding: 15px;
 }
 tbody {
  
  
 }

`

export default StyledTable
