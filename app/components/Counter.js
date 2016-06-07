import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {
      number: this.props.number
    }
    console.log('number:' + this.props.number);
  }
  handleOnChange(e) {
    this.props.handleChange(this.state.number);
  }
  handleReduce(e){
    var m = Number(this.state.number) - 1
    if(m > 0){
      this.setState({number: m},
        () => this.props.handleChange(this.state.number)
      )
    }
  }
  handleAdd(e) {
    var m = Number(this.state.number) + 1
    const { maxNum } = this.props
    if(m <= maxNum) {
      this.setState({number: m},
        () => this.props.handleChange(this.state.number)
      )
    }
  }
  render() {
    return (
      <div className="counter">
        <div className="counter-button dec-icon" onClick={e => this.handleReduce(e)}></div>
        <input type="text" value={this.state.number} ref="numbers" onChange={(e) => this.handleOnChange(e)} />
        <div className="counter-button inc-icon" onClick={e => this.handleAdd(e)}></div>
      </div>
    )
  }
}
