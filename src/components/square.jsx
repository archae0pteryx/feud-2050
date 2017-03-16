import React from 'react'
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }
  handleClick() {
    if (this.state.clicked) {
      this.setState({clicked: false})
    }
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
              <h3 className="number-block">{this.props.surveyNum}</h3>
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
        <h3>{this.props.cellNum}</h3>
        </div>
    )
  }
}