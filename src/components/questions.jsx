import React from 'react'
export default class extends React.Component {
  render() {
    const createQ = function(question, index) {
      return (
        <li key={index}>{question.text}</li>
      )
    }
    return (
      <ul>
        {this.props.questions.map(createQ)}
      </ul>
    )
  }
}
