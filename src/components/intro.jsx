import React from 'react'
import SH from '../assets/img/sh.png'
import SHL from '../assets/img/sh_lazers.png'
import '../assets/css/intro.css'
export default class extends React.Component {
  render() {
    return (
        <div className="steve-container">
          <img src={SH} alt="" className="steve" />
          <img src={SHL} alt="" className="lazers" />
        </div>
    )
  }
}