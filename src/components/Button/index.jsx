import React from 'react'
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
font-weight: 700;
color: #fff;
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
  background: ${props => props.background || 'red'};
`}
${props => props.outlined && css`
  color: ${props => props.color || '#000'};
  border: 1px solid ${props => props.color || '#000'};
  background: transparent;
`}
`

const LargeButton = styled(StyledButton)`
font-size: 30px;
`

const Button = (props) => {
  return <StyledButton {...props} />
}

export default Button
