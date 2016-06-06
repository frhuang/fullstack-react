import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Products from '../components/Products'
import * as action  from '../actions'

class Home extends Component {
  render() {
    const { products, actions } = this.props

    return (
      <div>
        <Products products={products} dispatch={actions}/>
      </div>
    )
  }
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  state => ({
    products: state.products
  }),
  dispatch => ({
    actions: bindActionCreators(action, dispatch)
  })
)(Home)
