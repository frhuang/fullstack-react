import React, { Component } from 'react'

export default class ProductInfo extends Component {
  constructor(props){
      super(props);
  }
  componentDidMount() {
    const { id } = this.props.params;
    console.log("id:"+id);
  }
  render() {
    return (
      <div className="product-info">
        <h2>商品名称</h2>
        <p>商品详情</p>
      </div>
    )
  }
}
