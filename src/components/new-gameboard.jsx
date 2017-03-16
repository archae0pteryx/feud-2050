import React from 'react'
import Square from './square'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  render() {
    const answer1 = 'sample answer'
    const answer2 = 'sample answer 2'
    const answer3 = 'sample answer 3'
    const answer4 = 'sample answer 4'
    const answer5 = 'sample answer 5'
    return (
      <div className="container-fluid">
        <div className="row">
          <Square answer={answer1} clicked={false}/>
        </div>
        <div className="row">
          <Square answer={answer2} clicked={false}/>
        </div>
        <div className="row">
          <Square answer={answer3} clicked={false}/>
        </div>
        <div className="row">
          <Square answer={answer4} clicked={false}/>
        </div>
        <div className="row">
          <Square answer={answer5} clicked={false}/>
        </div>
      </div>
    )
  }
}