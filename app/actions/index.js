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
    model.get('product')
    .then(response => {
      const products = JSON.parse(response.json.product)
      dispatch(receiveAllProducts(products))
    },
      error => console.log(error))
  }
}

export const getProductById = (id) => {
  return (dispatch, getState) => {
    const state = Object.assign({}, getState())
    let products = state.products
    products.some(product => {
      if(product.id === id){
        return dispatch(receiveProductInfo(product))
      }
    })
  }
}

export const addToCart = (id, num) => {
  return (dispatch, getState) => {
		const state = Object.assign({}, getState())
		let products = state.products
    products.some(product => {
      if(product.id === id){
        product.number += num;
        return true;
      }
    })
		sendProducts(dispatch, products)
	}
}

export const changeCartNum = (id, num) => {
  return (dispatch, getState) => {
		const state = Object.assign({}, getState())
		let products = state.products
    products.some(product => {
      if(product.id === id){
        product.number = num;
        return true;
      }
    })
		sendProducts(dispatch, products)
	}
}

export const removeCartById = (id) => {
  return (dispatch, getState) => {
		const state = Object.assign({}, getState())
		let products = state.products
    products.some(product => {
      if(product.id === id){
        product.number = 0;
        return true;
      }
    })
		sendProducts(dispatch, products)
	}
}

export const accountCart = () => {
  return (dispatch, getState) => {
		const state = Object.assign({}, getState())
		let products = state.products
    products.some(product => {
      product.number = 0;
    })
		sendProducts(dispatch, products)
	}
}

const sendProducts = (dispatch, products) => {
	model.setValue(['product'], { products })
		.then(response => {
			const products = JSON.parse(response).products
			dispatch(receiveAllProducts(products))
		})
}
