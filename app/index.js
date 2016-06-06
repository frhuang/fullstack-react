import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { getAllProducts } from './actions'
import App from './container/App'
import createRoutes from './routes';
import { browserHistory, Router } from 'react-router'

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import configureStore from './store/configureStore'

import '../public/scss/main.scss'

const root = document.querySelector('#app')

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(rootReducer)
store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <Router children={createRoutes} history={browserHistory} />
  </Provider>,
  root
)
