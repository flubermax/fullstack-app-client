import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPageId } from '../../store/singlePageReducer'

import './AdsItem.scss'

import photoPlaceholder from '../../assets/img/nophoto.jpg';
import Modal from '../Modal';

const AdsItem = ({ id, image, name, about, price, phone, removeAd }) => {
  const dispatch = useDispatch()

  const [visiblePopup, setVisiblePopup] = React.useState(false)

  const handleRemoveClick = () => {
    removeAd(id)
  }

  const setSinglePageId = React.useCallback((pageId) => {
    dispatch(setPageId(pageId))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="ads__item">
      <div className="ads__item__del" onClick={handleRemoveClick}>удалить</div>
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
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,  
  about: PropTypes.string,
  price: PropTypes.number,
  phone: PropTypes.string,
  removeAd: PropTypes.func,
}

export default AdsItem
