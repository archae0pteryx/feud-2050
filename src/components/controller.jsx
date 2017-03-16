import React from 'react'
export default class extends React.Component {
  render() {
    return (
      <div className="container">
          <div className="sound-fx">
            <button className="btn btn-info sound-btn">theme song <i className="fa fa-music"/></button>
            <button className="btn btn-primary sound-btn">right <i className="fa fa-music"/></button>
            <button className="btn btn-warning sound-btn">wrong <i className="fa fa-music"/></button>
          </div>
      </div>
    )
  }
}