import model from '../model'
import {
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT_INFO } from '../constants'

export const receiveAllProducts = response => {
  const products = (typeof response === 'object' && response.hasOwnProperty('length')) ? response : response.products
  return {
    type: RECEIVE_ALL_PRODUCTS,
    products: products
  }
}

export const receiveProductInfo = response => {
  return {
    type: RECEIVE_PRODUCT_INFO,
    productInfo: response
  }
}

export const getAllProducts = () => {
  return dispatch => {
    getProducts(dispatch)
  }
}

export const getProductById = (id) => {
  return dispatch => {
    model.get('menu')
      .then(response => {
        const products = JSON.parse(response.json.menu)
        products.map(product => {
          var i = product.id;
          if(i == id){
            return dispatch(receiveProductInfo(product))
          }
        })
      })
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
