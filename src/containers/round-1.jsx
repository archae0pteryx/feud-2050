import React from 'react'
export default class extends React.Component {
  componentWillMount() {
    this.setState({
      answer1: {
        text: 'this is round 1 answer',
        survey: 666,
        clicked: false
      },
      answer2: {
        text: 'this is round 1 answer 2',
        survery: 100,
        clicked: false
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Round 1</h1>
      </div>
    )
  }
}