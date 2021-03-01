import {
  GET_ALL_PRODUCTS,
  GET_PRODUCT,
  SORT_PRODUCTS
} from "./actions"

const initialState ={}
export const productReducer = (state = initialState, action) => {
  if (action.type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      products: action.products
    }
  }
  if (action.type === GET_PRODUCT) {
    return {
      ...state,
      product: action.product
    }
  }
  if (action.type === SORT_PRODUCTS) {
    let products = [...state.products]; // we're destructuring `state.posts` inside of array, essentially assigning the elements to a new array.
    // products.push(action.products);
    return {
      ...state,
      products
    }
  }
  return state
}