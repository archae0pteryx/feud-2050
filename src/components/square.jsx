import React from 'react'
export default class extends React.Component {
  render() {
    const createQ = function (question, index) {
      return (
          <div key={index} className="col-sm-6 cell">{question.text}</div>
      )
    }
    return (
      <div className="row">
            {this.props.questions.map(createQ)}
      </div>
    )
  }
}