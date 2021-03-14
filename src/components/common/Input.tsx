import styled from 'styled-components'

const Input = styled.input`
    & {
        --border-color: #393a47;
        font-size: 1rem;
        margin: 0.4em;
        border: solid 2px var(--border-color);
        padding: 0.2em 0.5em ;
        border-radius: 4px;
        background-color: #fff;
        transition: 0.4s all ease-in;
        outline : none;
       
    }
  

    &:focus {   
        --border-color:#414ac0;
    }
    
`

export default Input
