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
          <li><Link to="r5">R5</Link></li>
          <li><Link to="r6">R6</Link></li>
          <li><Link to="r7">R7</Link></li>
          <li><Link to="r8">R8</Link></li>
          <li><Link to="r9">R9</Link></li>
          <li><Link to="r10">R10</Link></li>
          <li><Link to="r11">R11</Link></li>
          <li><Link to="r12">R12</Link></li>
          <li><Link to="r13">R13</Link></li>
        </ul>
      </div>
    )
  }
}