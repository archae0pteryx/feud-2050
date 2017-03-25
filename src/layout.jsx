import React from 'react'
import Nav from './components/nav'
import './assets/css/layout.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}
