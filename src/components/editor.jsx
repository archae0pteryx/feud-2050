import React from 'react'
export default class extends React.Component {
    constructor(props) {
    super(props)
    console.log("constructing")
    this.state = {
      value: '',
      questions: []
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }
  pushToBase(e) {
    e.preventDefault()
    const currentQs = this.state.questions
    const newQs = currentQs.concat(this.state.value)
    this.setState({
      questions: newQs
    })  
    console.log("PUSHED")
  }
  render() {
    return (
        <div className="container padd">
            <div className="input-group">
            <input 
              className="form-control"
              onChange={this.handleChange.bind(this)}
              value={this.state.value}
              />
            <button onClick={this.pushToBase.bind(this)} className="btn btn-primary">push</button>
            </div>
          <div className="container padd">
              <ul>
                {this.state.questions.map((i)=> <li key={i}>{i}</li>)}
              </ul>
          </div>
        </div>
    )
  }
}