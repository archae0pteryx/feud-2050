import React from 'react'
export default class extends React.Component {
  componentWillMount() {
    this.setState({
      clicked: false
    })
  }
  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    if (!this.state.clicked) {
      return (
        <div className="row">
          <div className="col">
            <div className="cell" onClick={this.handleClick.bind(this)}>
              <h3>?</h3>
            </div>
          </div>
        </div>
      )
    }
    return (
        <div className="row">
          <div className="col">
            <div className="cell">
            <h3>{this.props.answer}</h3>
            </div>
          </div>
      </div>
    )
  }
}