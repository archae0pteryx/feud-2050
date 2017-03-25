import React from 'react'
import Correct from '../assets/sounds/correct.mp3'
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
              <h3>{this.props.num}</h3>
            </div>
          </div>

        </div>
      )
    }
    return (
      <div className="row">
        <audio autoPlay>
              <source src={Correct} type="audio/mpeg"/>
            </audio>
          <div className="col">
            <div className="cell">
            <h3>{this.props.answer}</h3>
            </div>
          </div>
      </div>
    )
  }
}