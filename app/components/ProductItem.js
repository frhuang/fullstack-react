import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ProductItem extends Component {
  render() {
    const { id, name, pic, price } = this.props
    return (
      <div key={id} className="product-item">
        <div className="product-box">
          <Link to={"productinfo/"+id}><img src={pic} /></Link>
          <Link to={"productinfo/"+id} className="product-name">{name}</Link>
          <p>价格:<span>{price}</span>元</p>
        </div>
      </div>
    )
  }
}
