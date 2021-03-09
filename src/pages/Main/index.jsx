import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { SortRow, AdsList, LoadingBlock, Button } from '../../components'
import { fetchAds } from '../../store/fetchAds'
import { setSortBy } from '../../store/sortReducer'

const sortItems = [
  { name: 'дате', type: 'date', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'названию', type: 'name', order: 'asc' },
]

const Main = () => {
  const dispatch = useDispatch()
  const myAds = useSelector(state => state.adsReducer.ads)
  const isLoaded = useSelector(state => state.adsReducer.isLoaded)
  const { sortBy } = useSelector(({ sortReducer }) => sortReducer)

  React.useEffect(() => {
    dispatch(fetchAds(sortBy))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="main">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <SortRow items={sortItems} activeSortType={sortBy.type} onClickSortType={onSelectSortType} />
        <Link to="/new">
          <Button primary>Добавить объявление</Button>
        </Link>      
      </div>
      {isLoaded ? <AdsList ads={myAds} /> : Array(4).fill(0).map((_, index) => <LoadingBlock key={index} />)}        
    </div>
  )
}

export default Main
