import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action  from '../actions'
import Counter from '../components/Counter'
import TitleBar from '../components/TitleBar'
import { Link } from 'react-router'

class ProductInfo extends Component {
  static contextTypes = {
      router: PropTypes.object.isRequired
  }
  constructor(props){
      super(props);
      this.state={num: 1}
  }
  componentDidMount() {
    const { id } = this.props.params;
    this.props.actions.getProductById(parseInt(id))
  }
  handleChange(num){
    this.state.num = num;
  }
  handleBack() {
    this.context.router.goBack()
  }
  turnToCart() {
    this.context.router.push("/cart");
  }
  addToCart(id) {
    this.props.actions.addToCart(id, this.state.num)
  }
  getCartNumber(arr){
    var n = 0;
    for(let i=0; i < arr.length; i++){
      n += arr[i].number;
    }
    return n;
  }
  render() {
    const { productInfo, actions, cart } = this.props;
    const { id, name, pic, disc, price, num, number} = productInfo
    var len = this.getCartNumber(cart)
    return (
      <div className="product-info">
        <TitleBar title="商品详情" handleBack={this.handleBack.bind(this)} />
        <div className="product-container">
          <div className="productInfo-img">
            <img src={pic} />
            <h2>{name}</h2>
            <p>￥{price}元</p>
          </div>
          <div className="product-num">
            <div className="num-box">
            <span>数量</span>
            <Counter maxNum={num} number={1} handleChange={num => this.handleChange(num)}/>
            <span>库存{num}件</span>
            </div>
          </div>
          <div className="product-content">
            <p>商品信息</p>
            <p>{disc}</p>
          </div>
        </div>
        <div className="productinfo-go">
          <div className="productInfo-cart" onClick={this.turnToCart.bind(this)}>
            {len > 0 ? <span>{len}</span> : null}
          </div>
          <div className="productinfo-btn-cart" onClick={this.addToCart.bind(this, id)}>加入购物车</div>
        </div>
      </div>
    )
  }
}

ProductInfo.propTypes = {
  productInfo: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  state => ({
    productInfo: state.productInfo,
    cart: state.products.filter(product => product.number > 0)
  }),
  dispatch => ({
    actions: bindActionCreators(action, dispatch)
  })
)(ProductInfo)
