import styled, { css } from 'styled-components'

type AvatarProps = {
    size : 'small' | 'mid' | 'big'
}
const Avatar = styled.img<AvatarProps>`
    vertical-align: middle;
    ${props => props.size === 'small' && css`
        width: 36px;
        height: 36px;
    `}
    ${props => props.size === 'mid' && css`
        width: 65px;
        height: 65px;
    `}
    ${props => props.size === 'big' && css`
        width: 100px;
        height: 100px;
    `}
   
    object-fit: cover;
    border-radius: 50%;
`

export default Avatar
