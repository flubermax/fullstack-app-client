import React from 'react'

import './AdsItem.scss'

import photoPlaceholder from '../../assets/img/nophoto.jpg';
import Modal from '../Modal';

const AdsItem = ({ id, image, name, about, price, phone, removeAd }) => { 

  const [visiblePopup, setVisiblePopup] = React.useState(false)

  const handleRemoveClick = () => {
    removeAd(id)
  }

  return (
    <div className="ads__item">
      <div className="ads__item__del" onClick={handleRemoveClick}>удалить</div>
      <div className="ads__item__image">
        <img src={image ? image : photoPlaceholder} alt="фото" />
      </div>
      <div className="ads__item__col">
        <div className="ads__item__name">{name}</div>
        <div className="ads__item__about">{about}</div>
      </div>
      <div className="ads__item__price">{price ? price + ' рублей' : 'Цена не указана'}</div>
      <button className="ads__item__btn" onClick={() => setVisiblePopup(true)}>
        Контакты
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

export default AdsItem
