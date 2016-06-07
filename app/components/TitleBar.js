import React, { Component } from 'react'

export default class TitleBar extends Component {
  render() {
    const { title, handleBack } = this.props
    return (
      <div className="product-nav">
        <div className="titlebar-back" onClick={handleBack}>返回</div>
        <div className="titlebar-title">{title}</div>
      </div>
    )
  }
}
