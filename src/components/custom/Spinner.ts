import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
  
    100%
    {
        transform: rotate(360deg);
    }
`
const Spinner = styled.div`

border : 4px solid rgba(0,0,0,.1);
width: 36px;
height: 36px;
border-radius:50%;
border-left-color:#2973be;

animation: ${rotate} infinite linear 1s;

`

export default Spinner
