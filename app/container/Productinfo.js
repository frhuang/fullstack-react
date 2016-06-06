import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as action  from '../actions'

class ProductInfo extends Component {
  constructor(props){
      super(props);
  }
  componentDidMount() {
    const { id } = this.props.params;
    this.props.actions.getProductById(id)
  }
  render() {
    const { productInfo } = this.props;
    const { id, name, pic, disc, money, num} = productInfo
    return (
      <div className="product-info">
        <div className="product-nav">
          <div className="titlebar-back">返回</div>
          <div className="titlebar-title">商品详情</div>
        </div>
        <div className="product-container">
          <div className="productInfo-img">
            <img src={pic} />
          </div>
          <div className="product-content">
            <h2>{name}</h2>
            <p>{money}</p>
            <p>{disc}</p>
          </div>
        </div>
      </div>
    )
  }
}

ProductInfo.propTypes = {
  productInfo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  state => ({
    productInfo: state.productInfo
  }),
  dispatch => ({
    actions: bindActionCreators(action, dispatch)
  })
)(ProductInfo)
