import model from '../model'
import { RECEIVE_ALL_PRODUCTS } from '../constants'

export const receiveAllProducts = response => {
  const products = (typeof response === 'object' && response.hasOwnProperty('length')) ? response : response.products
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products: products
  }
}

export const getAllProducts = () => {
  return dispatch => {
    getProducts(dispatch)
  }
}

const getProducts = dispatch => {
  model.get('menu')
  .then(response => {
    const products = JSON.parse(response.json.menu)
    dispatch(receiveAllProducts(products))
  },
    error => console.log(error))
}
