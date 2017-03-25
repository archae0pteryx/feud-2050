import React from 'react'
import ff_theme from '../assets/sounds/ff_theme.mp3'
import wrong from '../assets/sounds/wrong.mp3'
import correct from '../assets/sounds/correct.mp3'
import '../assets/css/controls.css'
export default class extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col padd">
            <i className="fa fa-music fa-4x"/>
            <audio controls>
              <source src={ff_theme} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
        <div className="row">
          <div className="col padd">
            <i className="fa fa-plus fa-4x"/>
            <audio controls>
              <source src={correct} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <i className="fa fa-times fa-4x"/>
            <audio controls>
              <source src={wrong} type="audio/mpeg"/>
            </audio>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    )
  }
}