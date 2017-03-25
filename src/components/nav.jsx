import React from 'react'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
export default class extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="menu">
          <DropdownButton title={<i className="fa fa-bars fa-2x"/>} id="menu-btn" noCaret>
            <LinkContainer to={{pathname: 'r1'}}><MenuItem>Round 1</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r2'}}><MenuItem>Round 2</MenuItem></LinkContainer>
          </DropdownButton>
        </div>
      </div>
    )
  }
}