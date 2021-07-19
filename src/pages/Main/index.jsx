import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Sort, AdsList, LoadingBlock } from '../../components'
import { fetchAds } from '../../actions/adsAction'
import { setSortBy } from '../../reducers/sortReducer'

import './Main.scss'

const sortItems = [
  { name: 'дате', type: 'date', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'названию', type: 'name', order: 'asc' },
]

const Main = () => {
  const dispatch = useDispatch()
  const { ads, isLoaded } = useSelector(({ adsReducer }) => adsReducer)
  const { sortBy } = useSelector(({ sortReducer }) => sortReducer)

  React.useEffect(() => {
    dispatch(fetchAds(sortBy))
  }, [dispatch, sortBy])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [dispatch])

  return (
    <div className="main">
      <div className="main__sort">
        <Sort items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSortType} />   
      </div>
      {isLoaded ? <AdsList ads={ads} /> : Array(4).fill(0).map((_, index) => <LoadingBlock key={index} />)}        
    </div>
  )
}

export default Main
