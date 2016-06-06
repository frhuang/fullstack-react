import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ProductItem extends Component {
  render() {
    const { id, name, num, money, pic } = this.props
    return (
      <div key={id} className="product-item">
        <Link to={"productinfo/"+id}><img src={pic} /></Link>
        <h2>{name}</h2>
        <p>价格:{money}</p>
      </div>
    )
  }
}
