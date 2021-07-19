const defaultState = {
  ads: [],
  isLoaded: false
}

const ADD_AD = 'ADD_AD'
const REMOVE_AD = 'REMOVE_AD'
const FETCH_ADS = 'FETCH_ADS'
const SET_LOADED = 'SET_LOADED'

export const adsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_AD:
      return { ...state, ads: [...state.ads, action.payload] }

    case REMOVE_AD:
      return { ...state, ads: state.ads.filter(ad => ad.id !== action.payload) }

    case FETCH_ADS:
      return { ...state, ads: action.payload, isLoaded: true }

    case SET_LOADED:
      return { ...state, isLoaded: action.payload }

    default:
      return state
  }
}

export const addAdsAction = (payload) => ({ type: ADD_AD, payload })
export const removeAdsAction = (payload) => ({ type: REMOVE_AD, payload })
export const fetchAdsAction = (payload) => ({ type: FETCH_ADS, payload })

export const setLoaded = (payload) => ({ type: SET_LOADED, payload })