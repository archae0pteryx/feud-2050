import React from 'react'
import {Link} from 'react-router'
import '../assets/css/nav.css'
export default class extends React.Component {
  render() {
    return (
      <div>
        <ul className="bottom-nav">
          <li><Link to="r1">R1</Link></li>
          <li><Link to="r2">R2</Link></li>
          <li><Link to="r3">R3</Link></li>
          <li><Link to="r4">R4</Link></li>
        </ul>
      </div>
    )
  }
}