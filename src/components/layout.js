import React from 'react'
import Header from './header'
import Input from './input'
import '../assets/css/layout.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Input/>
          <div className="row">
          <ul><li>Where questions will go</li></ul>
        </div>
        </div>
    )
  }
}
