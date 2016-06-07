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
  render() {
    const { cart, actions } = this.props
    console.log(cart)
    const nodes = cart.map(product => {
      return <CartItem {...product} handleChange={(id, num) => this.handleChange(id, num)} />
    })
    const total = cart.reduce((t, c) => t + c.number * c.price, 0)
    return (
      <div className="cart-info">
        <TitleBar title="购物车" handleBack={this.handleBack.bind(this)} />
        <div className="cart-container">
          {nodes}
          <div className="cart-total">
            <p>合计：{total}元</p>
            <div className="cart-btn">结算</div>
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
