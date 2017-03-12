import React from 'react'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col">
          <div className="cell">
            <h3>A cell</h3>
          </div>
        </div>
        <div className="col">
          <div className="cell">
            <h3>A cell</h3>
          </div>
        </div>
      </div>

      </div>
    )
  }
}