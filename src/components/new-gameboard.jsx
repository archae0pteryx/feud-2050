import React from 'react'
import Square from './square'
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
    const answer1 = 'sample answer'
    const answer2 = 'sample answer 2'
    const answer3 = 'sample answer 3'
    const answer4 = 'sample answer 4'
    const answer5 = 'sample answer 5'
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
        <div className="row">
          <Square answer={answer1} clicked={false} cellNum={1} surveyNum={666}/>
        </div>
        <div className="row">
          <Square answer={answer2} clicked={false} cellNum={2} surveyNum={665}/>
        </div>
        <div className="row">
          <Square answer={answer3} clicked={false} cellNum={3} surveyNum={664}/>
        </div>
        <div className="row">
          <Square answer={answer4} clicked={false} cellNum={4} surveyNum={663}/>
        </div>
        <div className="row">
          <Square answer={answer5} clicked={false} cellNum={5} surveyNum={662}/>
        </div>
      </div>
    )
  }
}