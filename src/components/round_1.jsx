import React from 'react'
import Square from './square'
import Round_1 from '../data/round_1.json'
export default class extends React.Component {
  componentWillMount() {
    console.log(Round_1)
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h3>{Round_1.question}</h3>
          </div>
        </div>
        <div className="row">
          {Round_1.answers.map(text => <Square key={text.id} answer={text.ans}/>)}
        </div>
      </div>
    )
  }
}