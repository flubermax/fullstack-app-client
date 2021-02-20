import React from 'react'

import './AdsItem.scss'

import photoPlaceholder from '../../assets/img/nophoto.jpg';

const AdsItem = React.memo(function AdsItem({ image, name, about, price, phone }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  // const popupRef = React.useRef()

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup)
  }

  // const handleOutsideClick = (e) => {
  //   if (!e.path.includes(popupRef.current)) {
  //     setVisiblePopup(false)
  //   }
  // }

  const handleOutsideClick = (e) => {
    if (!e.target.classList.contains('ads__popup__body')) {
      setVisiblePopup(false)
    }
  }

  // React.useEffect(() => {
  //   document.body.addEventListener('click', handleOutsideClick)
  // }, [])

  return (
    <div className="ads__item" >
      <div className="ads__item__image">
        <img src={image ? image : photoPlaceholder} alt="фото" />
      </div>
      <div className="ads__item__col">
        <div className="ads__item__name">{name}</div>
        <div className="ads__item__about">{about}</div>
      </div>
      <div className="ads__item__price">{price ? price + ' рублей' : 'Цена не указана'}</div>
      <button className="ads__item__btn" onClick={toggleVisiblePopup}>
        Контакты
      </button>
      { visiblePopup && (
        <div className='ads__popup'>
          <div className="ads__popup__overlay" onClick={handleOutsideClick}>
            <div className="ads__popup__body">
              <div className="ads__popup__close" onClick={toggleVisiblePopup}></div>
              <div className="ads__popup__body__title">Телефон для связи:</div>
              <a className="ads__popup__body__link" href="#">
                {phone}
              </a>
            </div>
          </div>
        </div>    
      )}
      </div>
  )
})

export default AdsItem
