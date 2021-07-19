const defaultState = {
  currentUser: {},
  isAuth: false,
  authIsLoaded: false
}

const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'
const SET_AUTH_LOADED = 'SET_AUTH_LOADED'

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state, currentUser: action.payload, isAuth: true,
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state, currentUser: {}, isAuth: false
      }
    case SET_AUTH_LOADED:
      return { ...state, authIsLoaded: action.payload }
    default:
      return state
  }
}

export const setUser = user => ({ type: SET_USER, payload: user })
export const setLogout = () => ({ type: LOGOUT })

export const setAuthLoaded = (payload) => ({ type: SET_AUTH_LOADED, payload })