import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeAdsAction } from '../reducers/adsReducer';
import styled from 'styled-components'

import AdsItem from './AdsItem'

const StyledAdsList = styled.div`
padding: 0 10px;
`

const AdsList = (props) => {   
  const dispatch = useDispatch()

  const onAddToFav = (id) => {
    if (window.confirm('Точно удалить это объявление??')) {
      dispatch(removeAdsAction(id))
    }
  }
  console.log(props)

  return (
    <StyledAdsList {...props}>
      {props.ads.length > 0 ? 
      <div>
        {props.ads.map((ad) => (
          <AdsItem key={ad._id} id={ad._id} name={ad.name} image={ad.image} about={ad.about} price={ad.price} phone={ad.phone} addToFavorite={onAddToFav} />
        ))}
      </div> : <div className="noAds">Активных объявлений пока нет :(</div>}
       
    </StyledAdsList>
  )
}

AdsList.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,  
  about: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  removeAd: PropTypes.func,
}

export default AdsList
