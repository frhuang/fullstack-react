import { combineReducers } from 'redux'
import products from './products'
import productInfo from './productInfo'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
	products,
	productInfo,
	routing: routerReducer
})

export default rootReducer
