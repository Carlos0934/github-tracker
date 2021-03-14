import styled, { css } from 'styled-components'

type DarknessProps = {
    show? : boolean
}
const Darkness = styled.div<DarknessProps>`
    
   
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(43, 43, 43, 0.5);
    ${({ show }) => !show && css`
       display: none;
    `};
    ${({ show }) => show && css`
        display: flex;
       
    `};
    


    
  
    

`

export default Darkness
