import { RECEIVE_ALL_PRODUCTS } from '../constants'

const initialState = []

export default function products(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
        return action.products
      break;
    default:
      return state
  }
}
