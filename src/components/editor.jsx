import React from 'react'
import Questions from './questions'
import { db } from '../fire'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.fbRef = db.ref('feud/questions')
    this.state = {
      questions: [],
      text: ''
    }
  }
  componentWillMount(fbRef) {
    this.fbRef.on('value', (snap) => {
      let questions = []
      snap.forEach((childSnap) => {
        const question = childSnap.val()
        question['.key'] = childSnap.key
        questions.push(question)
      })
      this.setState({ questions: questions })
    })
  }
  componentWillUnmount() {
    this.fbRef.off()
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  pushToBase(e) {
    e.preventDefault()  
      this.fbRef.push({
        text: this.state.text
      })
      this.setState({
        text: ''
      })
  }
  render() {
    return (
      <div className="container padd">
        <div className="input-group">
          <input
            className="form-control"
            onChange={this.handleChange.bind(this)}
            value={this.state.text}
          />
          <button onClick={this.pushToBase.bind(this)} className="btn btn-primary">push</button>
        </div>
        <div className="container padd">
        <Questions questions={ this.state.questions }/>
        </div>
      </div>
    )
  }
}