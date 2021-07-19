import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.div`
font-weight: 700;
font-size: 14px;
padding: 10px;
`

export const Loader = (props) => {
  return <StyledLoader {...props}>Подождите, идёт загрузка...</StyledLoader>
}

export default Loader
