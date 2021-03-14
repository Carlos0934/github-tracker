import styled from 'styled-components'

const Panel = styled.div`
    & {
        max-width: 1000px;
        display:grid;
        grid-template-columns: 1fr 2fr;
        margin:1rem auto;
        gap:1.5rem;
        border-radius:4px;
      
       
    }

    & > *{
        width: 100%
    }
`
export default Panel
