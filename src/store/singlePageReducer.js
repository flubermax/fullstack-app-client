const defaultState = {
  singleAd: {},
  pageId: 1,
  isLoaded: false
}

const SET_ID = 'SET_ID'
const FETCH_SINGLE_AD = 'FETCH_SINGLE_AD'
const SET_LOADING = 'SET_LOADING'

export const singlePageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_AD:
      return { ...state, singleAd: action.payload, isLoaded: false }
    case SET_ID:
      return { ...state, pageId: action.payload }
    case SET_LOADING:
      return { ...state, isLoaded: action.payload }
    default:
      return state
  }
}


export const fetchSingleAdAction = (payload) => ({ type: FETCH_SINGLE_AD, payload })
export const setPageId = (payload) => ({ type: SET_ID, payload })
export const setPageLoaded = (payload) => ({ type: SET_LOADING, payload })