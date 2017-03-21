import React from 'react'
import Square from '../square'
import {Round4} from '../../data'
export default class extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h3>{Round4.question}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {Round4.answers.map(text => <Square key={text.id} answer={text.ans} num={text.id}/>)}
          </div>
        </div>
      </div>
    )
  }
}