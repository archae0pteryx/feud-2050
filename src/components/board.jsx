import React from "react";
import Square from "./square";
import {Data} from "../data";
export default class extends React.Component {
  componentWillMount() {
    this.setState({
      answers: Data.answers
    })
  }
  render() {
    console.log(this.state.answers)
    return (
      <div className="col">
        {this.state.answers.map((text)=>{
          return <Square key={text.id} answer={text.ans} clicked={false}/>
        })}
      </div>
    );
  }
}
