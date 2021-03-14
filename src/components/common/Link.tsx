import styled from 'styled-components'

const Link = styled.a`
    --color : #fff;
    --bg-color: #222a96;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    border: 2px solid transparent;
    text-align: center;
    color:var(--color);
    transition: all 0.3s ease-in-out; 
    
    :hover {
        background-color: transparent;
        border-color:var(--bg-color);
        color: var(--bg-color) ;
        
    }
    
`

export default Link
