import React, { Component } from 'react'
import ProductItem from './ProductItem'


export default class Products extends Component {
  render() {
    const { products, dispatch } = this.props
    const lists = products.map(product => {
      return <ProductItem key={product.id}
      {...product}
      dispatch={dispatch}
      />
    })
    return (
      <div className="products">
        <div className="product-nav">
          <div className="titlebar-title">商品列表</div>
        </div>
        {lists}
      </div>
    )
  }
}
