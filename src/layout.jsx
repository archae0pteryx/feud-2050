import React from 'react'
import Header from './components/header'
import Nav from './components/nav'
import './assets/css/layout.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
        <Nav/>
      </div>
    )
  }
}
