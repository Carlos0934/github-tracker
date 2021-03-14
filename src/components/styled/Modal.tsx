import { useState } from 'react'
import styled from 'styled-components'
import Darkness from './Darkness'

const Modal = styled.div`
    max-width: 500px;
    position: absolute;
    top: 35%;
    left:0;
    right: 0;
    z-index: 1;
    margin: auto;
    
   
`
type ModalWrapperProps = {
    open: boolean
    onClose?: () => void
}
const ModalWrapper : React.FC<ModalWrapperProps> = ({ children, open, onClose }) => {
  const [show, setShow] = useState(open)
  const close = () => {
    onClose?.()
    setShow(false)
  }
  return (
        <Darkness onClick = {(e) => {
          if (e.currentTarget === e.target) close()
        }} show = {show}>
            <Modal>
            {children}
            </Modal>
        </Darkness>
  )
}

export default ModalWrapper
