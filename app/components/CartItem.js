import React, { Component } from 'react'
import Counter from './Counter'

export default class CartItem extends Component {
  constructor(props){
    super(props)
  }
  handleChange(num) {

  }
  render() {
    const { id, name, pic, disc, price, num, number } = this.props

    return (
      <div className="cartItem">
        <div className="cartItem-content">
          <div className="cartItem-left"><img src={pic} /></div>
          <div className="cartItem-right">{name}</div>
        </div>
        <div className="cartItem-footer">
          <div className="footer-left">￥{price}元</div>
          <div className="footer-right">
             <Counter maxNum={num} number={number} handleChange={num => this.props.handleChange(id, num)}/>
          </div>
        </div>
      </div>
    )
  }
}
