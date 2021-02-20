import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components'

import './SortRow.scss'

const SortRow = () => {
  return (
    <div className="sortRow">
      <div className="sortRow__block">
        <div className="sortRow__block__text">Сортировать по:</div>
        <div className="sortRow__block__item">Дате</div>
        <div className="sortRow__block__item">Цене</div>
      </div>
      <Link to="/new">
        <Button background={"green"}>Добавить объявление</Button>
      </Link>
    </div>
  )
}

export default SortRow
