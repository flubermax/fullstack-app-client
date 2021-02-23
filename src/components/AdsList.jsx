import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAdsAction } from '../store/adsReducer';
import styled from 'styled-components'

import AdsItem from './AdsItem'

const StyledAdsList = styled.div`
padding: 0 10px;
`

const AdsList = (props) => { 
  const myAds = useSelector((state) => state.ads)
  const dispatch = useDispatch()

  const onRemoveItem = (id) => {
    if (window.confirm('Точно удалить это объявление??')) {
      dispatch(removeAdsAction(id))
    }
  }

  return (
    <StyledAdsList {...props}>
      {myAds.length > 0 ? 
      <div>
        {myAds.map((ad) => (
          <AdsItem key={ad.id} id={ad.id} name={ad.name} image={ad.image} about={ad.about} price={ad.price} phone={ad.phone} removeAd={onRemoveItem} />
        ))}
      </div> : <div className="noAds">Активных объявлений пока нет :(</div>}
       
    </StyledAdsList>
  )
}

export default AdsList
