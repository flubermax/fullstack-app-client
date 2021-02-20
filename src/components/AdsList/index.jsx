import React from 'react'
import { useSelector } from 'react-redux'
import { AdsItem } from '../../components'

import './AdsList.scss'

const AdsList = () => {
  const myAds = useSelector((state) => state.ads)

  return (
    <div className="ads__list">
      {myAds.map((ad) => (
        <AdsItem key={ad.id} name={ad.name} image={ad.image} about={ad.about} price={ad.price} phone={ad.phone} />
      ))}
    </div>
  )
}

export default AdsList
