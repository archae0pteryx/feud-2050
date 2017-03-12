import React from 'react'
import Header from './components/header'
import GameBoard from './components/gameboard'
import './assets/css/layout.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <GameBoard/>
      </div>
    )
  }
}
