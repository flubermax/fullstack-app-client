import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
  return (
    <header className="header shadow">
      <div className="header__row">
        <Link className="logo" to="/">
          <div className="logo__name"><span>kanda</span>ads</div>
          <div className="logo__text">Быстрые объявления в Кандалакше</div>
        </Link>
      </div>
    </header>
  )
}

export default Header
