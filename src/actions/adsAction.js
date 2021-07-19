import axios from 'axios'
import { fetchAdsAction, setLoaded } from "../reducers/adsReducer"
import { fetchSingleAdAction, setPageLoaded } from "../reducers/singlePageReducer"
import { API_URL } from "../config";

export function fetchAds() {
  return async dispatch => {
    try {
      dispatch(setLoaded(false))
      let url = `${API_URL}api/adverts`
      const response = await axios.get(url);
      // console.log(response.data)
      dispatch(fetchAdsAction(response.data))
    } catch (e) {
      alert(e.response.data.message)
    } finally {
      dispatch(setLoaded(true))
    }
  }
}

export const fetchSinglePage = (pageId) => (dispatch) => {
  dispatch(setPageLoaded(true))
  setTimeout(() => {
    fetch(`${API_URL}api/adverts/${pageId}`)
      .then(response => response.json())
      .then(json => dispatch(fetchSingleAdAction(json)))
  }, 200);
}