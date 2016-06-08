import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'
import createRoutes from './routes';
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'

import '../public/scss/main.scss'

const root = document.querySelector('#app')
const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router children={createRoutes} history={browserHistory} />
  </Provider>,
  root
)
