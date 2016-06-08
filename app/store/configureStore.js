import { createStore, applyMiddleware, compose  } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import { getAllProducts } from '../actions'

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()]

export default function configureStore(history) {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
  )
  if(module.hot) {
      module.hot.accept('../reducers', () => {
          const nextReducer = require('../reducers');
          store.replaceReducer(nextReducer);
      })
  }

  store.dispatch(getAllProducts())
  return store;
}
