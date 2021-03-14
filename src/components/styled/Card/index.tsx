import styled from 'styled-components'

const Card = styled.div`
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: "header"
                         "body";
                        

`

export default Card
