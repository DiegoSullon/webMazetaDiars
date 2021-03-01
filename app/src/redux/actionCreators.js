import Axios from "axios"
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT
} from "./actions"

// const API_URL = process.env.REACT_APP_API_URL
const API_URL = 'http://localhost:5000/api'

export const getAllProducts = () => dispatch => {
  Axios.get(`${API_URL}/product`).then(
    resp => {
      return dispatch({
        type: GET_ALL_PRODUCTS,
        products: resp.data
      })
    }
  )
}
//------------------------------------------------
export const getProduct = id => dispatch => {
  Axios.get(`${API_URL}/product/${id}`).then(
    resp => {
      return dispatch({
        type: GET_PRODUCT,
        product: resp.data
      })
    }
  )
}