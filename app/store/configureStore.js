import { createStore, applyMiddleware, compose  } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger]
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer)
  if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        })
    }
  return store
}
