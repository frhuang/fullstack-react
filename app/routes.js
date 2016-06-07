import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './container/App'
import Home from './container/Home'
import ProductInfo from './container/ProductInfo'
import Cart from './container/Cart'


export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/productinfo/:id" component={ProductInfo} />
    <Route path="/cart" component={Cart} />
    <Route path="*" component={Home} />
  </Route>
)
