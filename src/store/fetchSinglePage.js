import { fetchSingleAdAction, setPageLoaded } from "./singlePageReducer"

export const fetchSinglePage = (pageId) => (dispatch) => {
  dispatch(setPageLoaded(true))
  setTimeout(() => {
    fetch(`http://localhost:3001/ads/${pageId}`)
      .then(response => response.json())
      .then(json => dispatch(fetchSingleAdAction(json)))
  }, 200);
}