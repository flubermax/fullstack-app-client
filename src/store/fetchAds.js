import { fetchAdsAction, setLoaded } from "./adsReducer"

export const fetchAds = (sortBy) => (dispatch) => {
  dispatch(setLoaded(false))
  setTimeout(() => {
    fetch(`http://localhost:3001/ads?_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(response => response.json())
      .then(json => dispatch(fetchAdsAction(json)))
  }, 500);
}