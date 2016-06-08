import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action  from '../actions'
import TitleBar from '../components/TitleBar'
import CartItem from '../components/CartItem'

class Cart extends Component {
  static contextTypes = {
      router: PropTypes.object.isRequired
  }
  handleChange(id, num) {
    this.props.actions.changeCartNum(id, num)
  }
  handleBack() {
    this.context.router.goBack()
  }
  removeCartById(id){
    this.props.actions.removeCartById(id)
  }
  accountCart() {
    const { cart } = this.props;
    if(cart.length > 0){
      var isOk = confirm('确认支付？');
      if(isOk){
        this.props.actions.accountCart()
        this.handleBack()
      }
    }
  }
  render() {
    const { cart, actions } = this.props
    const nodes = cart.map(product => {
      return <CartItem key={product.id} {...product} removeCartById={(id) => this.removeCartById(id)} handleChange={(id, num) => this.handleChange(id, num)} />
    })
    const total = cart.reduce((t, c) => t + c.number * c.price, 0)
    return (
      <div className="cart-info">
        <TitleBar title="购物车" handleBack={this.handleBack.bind(this)} />
        <div className="cart-container">
          {cart.length > 0 ? nodes : <div className="cartItem-no">购物车空空如也,快去购物吧</div>}
          <div className="cart-total">
            <p>合计：{total}元</p>
            <div className="cart-btn" onClick={this.accountCart.bind(this)}>结算</div>
          </div>
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  state => ({
    cart: state.products.filter(product => product.number > 0)
  }),
  dispatch => ({
    actions: bindActionCreators(action, dispatch)
  })
)(Cart)
