import styled from 'styled-components'

const Select = styled.select`
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
        cursor: pointer;
        appearance: none;
    }
    
    &::after {
        content: "";
        width: 0.8rem;
        height: 0.5rem;
        background-color: var(--border-color);
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }

    &:focus {   
        --border-color:#414ac0;
    }
`
export default Select
