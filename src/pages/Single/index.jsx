import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSinglePage } from '../../actions/adsAction'

import { Button } from '../../components'

import './Single.scss'
import photoPlaceholder from '../../assets/img/nophoto.jpg';

const SinglePage = () => {
  const dispatch = useDispatch()
  const { singleAd, pageId, isLoaded } = useSelector(({ singlePageReducer }) => singlePageReducer)

  React.useEffect(() => {
    dispatch(fetchSinglePage(pageId))
  }, [pageId, dispatch])

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

export default SinglePage;