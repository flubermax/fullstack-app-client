import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './Single.scss'

const Favorites = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {

  }, [])

  return (
    <div className="single">
      <div className="single__top">
        <NavLink to="/">
          <Button outlined>Назад</Button>
        </NavLink>
        <NavLink to="/new">
          <Button primary>Добавить объявление</Button>
        </NavLink>        
      </div>
      {isLoaded ? 'Идёт загрузка...' : (
        <div className="single__content">
          <div className="single__image">
            <img src={singleAd.image ? singleAd.image : photoPlaceholder} alt="фото" />
          </div>
          <div className="single__body">
            <div className="single__name">
              {singleAd.name}
              </div>
            <div className="single__about">
              {singleAd.about}
            </div>
            <div className="single__price">
              <span>Цена:</span>
              {singleAd.price ? + singleAd.price + ' рублей' : 'не указана'}
            </div>
            <div className="single__phone">
              <span>Телефон:</span>{singleAd.phone}
            </div>
          </div>            
        </div>
      )}
     
    </div>
  );
}

export default Favorites;