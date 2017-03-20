import React from 'react'
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.prevRound = this.prevRound.bind(this)
    this.nextRound = this.nextRound.bind(this)
  }
  componentWillMount() {
    this.setState({round: 1})
  }
  prevRound() {
    console.log("prev round")
  }
  nextRound() {
    console.log("next round")
  }
  render() {
    return (
      <div>
        <div className="round">
          <i 
            onClick={this.prevRound}
            id="prev"
            className="fa fa-angle-left"/> <p className="p-round">Round: {this.state.round}</p>
          <i 
            onClick={this.nextRound}
            id="next"
            className="fa fa-angle-right"/>
          </div>
      </div>
    )
  }
}