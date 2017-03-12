import React from 'react'
export default class extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-danger" type="button">
                <i className="fa fa-minus fa-2x"/>
              </button>
            </span>
            <input type="text" className="form-control" placeholder="add question"/>
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button">
                <i className="fa fa-plus fa-2x"/>
              </button>
            </span>
          </div>
        </div>
      </form>
    )
  }
}