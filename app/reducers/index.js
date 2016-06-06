import { combineReducers } from 'redux'
import products from './products'
import productInfo from './productInfo'


const rootReducer = combineReducers({
	products,
	productInfo
})

export default rootReducer
