import React from 'react'
import {Link} from 'react-router'
import '../assets/css/nav.css'
export default class extends React.Component {
  render() {
    return (
      <div>
        <ul className="bottom-nav">
          <li><Link to="board">board</Link></li>
          <li><Link to="controller">control</Link></li>
        </ul>
      </div>
    )
  }
}