import React from 'react'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  componentWillMount() {
    this.setState({round: 1})
  }
  prevRound() {
    console.log("clicked prev")
    if (this.state.round === 1) {
      console.log("lowest round (1)")
      this.setState({round: 1})
      return
    }
    this.setState({round: this.state.round - 1})
  }
  nextRound() {
    console.log("clicked next")
    if (this.state.round === 5) {
      console.log("highest round (5)")
      return 
    }
    this.setState({round: this.state.round + 1})
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="round">
          <i 
            onClick={this.prevRound.bind(this)}
            id="prev"
            className="fa fa-angle-left"/> <p className="p-round">Round: {this.state.round} </p>
          <i 
            onClick={this.nextRound.bind(this)}
            id="next"
            className="fa fa-angle-right"/>
          </div>
      </div>
    )
  }
}