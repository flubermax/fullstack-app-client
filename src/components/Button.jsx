import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
font-weight: 700;
color: ${props => props.color};
background: ${props => props.background};
border: none;
border-radius: 5px;
padding: 10px;
cursor: pointer;
transition: all 0.15s linear;
&:hover {
  opacity: 0.8;
}
${props => props.primary && css`
  color: ${props => props.color || '#fff'};
  background: ${props => props.background || 'green'};
`}
${props => props.outlined && css`
  color: ${props => props.color || 'green'};
  border: 1px solid ${props => props.color || 'green'};
  background: transparent;
  &:hover{
    color: #fff;
    background: ${props => props.color || 'green'};
  }
`}
`

// const SmallButton = styled(StyledButton)`
// font-size: 15px;
// padding: 8px;
// `

export const Button = (props) => {
  return <StyledButton {...props} />
}

export default Button
