import { RECEIVE_PRODUCT_INFO } from '../constants'

const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT_INFO:
        return action.productInfo
      break;
    default:
      return state
  }
}
