import Axios from "axios"
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  SORT_PRODUCTS
} from "./actions"

// const API_URL = process.env.REACT_APP_API_URL
const API_URL = 'http://localhost:5000/api'

export const getAllProducts = () => dispatch => {
  Axios.get(`${API_URL}/product`).then(
    resp => {
      return dispatch({
        type: GET_ALL_PRODUCTS,
        products: resp.data.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
      })
    }
  )
}
export const sortProducts = (products, value) => dispatch => {
  switch (value) {
    case "1":
      products.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
      break;
    case "2":
      products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : ((b.name.toUpperCase() > a.name.toUpperCase()) ? -1 : 0))
      break;

    default:
      break;
  }
  return dispatch({
    type: SORT_PRODUCTS,
    products
  })
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