import React from 'react'
import Editor from './editor'
// import {db} from '../fire'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="cell">
            <h3>?</h3>
          </div>
        </div>
        <div className="col">
          <div className="cell">
            <h3>?</h3>
          </div>
        </div>
      </div>
      <Editor />
      </div>
    )
  }
}