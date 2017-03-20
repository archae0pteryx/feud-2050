import React from 'react'
import Round from '../components/round'
import Board from '../components/board'
import '../assets/css/gameboard.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Round />
        <Board/>
      </div>
    )
  }
}