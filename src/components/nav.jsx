import React from 'react'
import {Link, IndexLink} from 'react-router'
import '../assets/css/nav.css'
export default class extends React.Component {
  render() {
    return (
      <div>
        <ul className="bottom-nav">
          <li><IndexLink to="/">board</IndexLink></li>
          <li><Link to="edit">edit</Link></li>
        </ul>
      </div>
    )
  }
}