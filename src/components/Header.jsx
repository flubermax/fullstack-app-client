import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHeader = styled.header`
.header {
  &__row {
    display: flex;
    justify-content: space-between;
  }
}

.logo {
  color: #000;
  transition: all 0.1s linear;
  &:hover {
    opacity: 0.8;
  }

  &__name {
    font-size: 20px;
    font-weight: 500;
    span{
      font-size: 25px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  &__text {
    font-size: 15px;
    font-style: italic;
    margin-top: 5px;
  }
}
`

const Header = (props) => {
  return (
    <StyledHeader {...props} className="shadow">
      <div className="header__row">
        <Link className="logo" to="/">
          <div className="logo__name"><span>kanda</span>ads</div>
          <div className="logo__text">Быстрые объявления в Кандалакше</div>
        </Link>
      </div>
    </StyledHeader>
  )
}

export default Header
