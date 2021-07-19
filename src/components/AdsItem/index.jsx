import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPageId } from '../../reducers/singlePageReducer'

import './AdsItem.scss'

import photoPlaceholder from '../../assets/img/nophoto.jpg';
import Modal from '../Modal';

const AdsItem = ({ id, image, name, about, price, phone, addToFavorite }) => {
  const dispatch = useDispatch()
  const [visiblePopup, setVisiblePopup] = React.useState(false)

  const handleLikeClick = () => {
    addToFavorite(id)
  }

  const setSinglePageId = React.useCallback((pageId) => {
    dispatch(setPageId(pageId))
  }, [dispatch])

  return (
    <div className="ads__item">
      <button className="ads__item__like" onClick={handleLikeClick}></button>
      <div className="ads__item__image">
        <img src={image ? image : photoPlaceholder} alt="фото" />
      </div>
      <div className="ads__item__col">
        <Link className="ads__item__name" to="/single" onClick={() => setSinglePageId(id)}>{name}</Link>
        <div className="ads__item__about">{about}</div>
      </div>
      <div className="ads__item__price">{price ? price + ' рублей' : 'Цена не указана'}</div>
      <button className="ads__item__btn" onClick={() => setVisiblePopup(true)}>
        Показать телефон
      </button>
      <Modal active={visiblePopup} setActive={setVisiblePopup}>
        <div className="modal__body__title">Телефон для связи:</div>
        <a className="modal__body__link" href={`tel:+${phone.replace(/[^0-9]/g, '')}`}>
          {phone}
        </a>
      </Modal>
    </div>
  )
}

AdsItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,  
  about: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  removeAd: PropTypes.func,
}

export default AdsItem
