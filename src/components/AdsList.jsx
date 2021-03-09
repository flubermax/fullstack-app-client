import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeAdsAction } from '../store/adsReducer';
import styled from 'styled-components'

import AdsItem from './AdsItem'

const StyledAdsList = styled.div`
padding: 0 10px;
`

const AdsList = (props) => {   
  const dispatch = useDispatch()
  console.log(props)

  const onRemoveItem = (id) => {
    if (window.confirm('Точно удалить это объявление??')) {
      dispatch(removeAdsAction(id))
    }
  }

  return (
    <StyledAdsList {...props}>
      {props.ads.length > 0 ? 
      <div>
        {props.ads.map((ad) => (
          <AdsItem key={ad.id} id={ad.id} name={ad.name} image={ad.image} about={ad.about} price={ad.price} phone={ad.phone} removeAd={onRemoveItem} />
        ))}
      </div> : <div className="noAds">Активных объявлений пока нет :(</div>}
       
    </StyledAdsList>
  )
}

AdsList.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,  
  about: PropTypes.string,
  price: PropTypes.number,
  phone: PropTypes.string,
  removeAd: PropTypes.func,
}

export default AdsList
