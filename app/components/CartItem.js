import React, { Component } from 'react'
import Counter from './Counter'

export default class CartItem extends Component {
  constructor(props){
    super(props)
  }
  remove(id){
    var isOk = confirm('是否确认删除？')
    if(isOk) {
      this.props.removeCartById(id)
    }
  }
  render() {
    const { id, name, pic, disc, price, num, number } = this.props

    return (
      <div className="cartItem">
        <div className="cartItem-content">
          <div className="cartItem-left"><img src={pic} /></div>
          <div className="cartItem-right">{name}</div>
          <div className="cartItem-btn" onClick={() => this.remove(id)}>删除</div>
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
