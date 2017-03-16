import React from 'react'
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }
  handleClick() {
    this.setState({
      clicked: true
    })
  }
  render() {
    if (this.state.clicked) {
      return (
        <div className="col-sm-12 cell">
          <h3>{this.props.answer}</h3>
        </div>  
      )
    }
    return (
      <div className="col-sm-12 cell" onClick={this.handleClick.bind(this)}>
        <h3>?</h3>
      </div>
    )
  }
}