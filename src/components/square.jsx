import React from 'react'
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }
  handleClick() {
    this.setState({clicked: true})
  }
  render() {
    if (this.state.clicked) {
      return (
        <div className="col-sm-12 cell">
          <div className="row">
            <div className="col-sm-10">
              <h3>{this.props.answer}</h3>
            </div>
            <div className="col-sm-2 pull-right">
              <h3 className="number-block">666</h3>
            </div>
          </div>
        </div>
      )
    }
    return (
        <div
          className="col-sm-10 offset-sm-1 cell"
          onClick={this
          .handleClick
          .bind(this)}>
          <h3>?</h3>
        </div>
    )
  }
}