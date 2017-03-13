import React from 'react'
import Square from './square'
import { db } from '../fire'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  constructor() {
    super()
    this.fbRef = db.ref('feud/questions')
    this.state = {
      questions: [],
      answers: []
    }
  }
  componentWillMount(fbRef) {
    this.fbRef.once('value', snap => {
      let questions = []
      snap.forEach((childSnap) => {
        const question = childSnap.val()
        question['.key'] = childSnap.key
        questions.push(question)
      })
      this.setState({ questions: questions })
    })
  }
  render() {
    return (
      <div className="container-fluid">
          <Square questions={this.state.questions}/>
      </div>
    )
  }
}