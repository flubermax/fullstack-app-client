import axios from 'axios'
import { setUser, setLogout, setAuthLoaded } from '../reducers/userReducer'
import { API_URL } from "../config";

export const registration = async (email, phone, password) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/registration`, {
      email,
      phone,
      password
    })
    alert(response.data.message)
  } catch (e) {
    alert(e.response.data.message)
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password
      })
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
      // console.log(response.data)
    } catch (e) {
      alert(e.response.data.message)
    } finally {
      dispatch(setAuthLoaded(false))
    }

  }
}

export const logout = () => {
  return async dispatch => {
    try {
      dispatch(setLogout())
      // console.log(response.data)
    } catch (e) {
      alert(e.response.data.message)
    }
  }
}

export const auth = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}api/auth/auth`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      localStorage.removeItem('token')
    }
  }
}