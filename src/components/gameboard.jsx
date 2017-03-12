import React from 'react'
// import {db} from '../fire'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="form-group">
          <input 
            className="form-control" 
            placeholder="test"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
            />
          <button className="btn btn-primary float-right">push</button>
          </div>
        </div>
      <div className="row">
        <div className="col">
          <div className="cell">
            <h3>{this.state.value}</h3>
          </div>
        </div>
        <div className="col">
          <div className="cell">
            <h3>?</h3>
          </div>
        </div>
      </div>

      </div>
    )
  }
}