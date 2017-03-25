import React from 'react'
export default class extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col">
          <h2>{this.props.question}</h2>
        </div>
      </div>
    )
  }
}