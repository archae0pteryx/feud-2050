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
            <LinkContainer to={{pathname: 'r3'}}><MenuItem>Round 3</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r4'}}><MenuItem>Round 4</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r5'}}><MenuItem>Round 5</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r6'}}><MenuItem>Round 6</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r7'}}><MenuItem>Round 7</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r8'}}><MenuItem>Round 8</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r9'}}><MenuItem>Round 9</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r10'}}><MenuItem>Round 10</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r11'}}><MenuItem>Round 11</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r12'}}><MenuItem>Round 12</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r13'}}><MenuItem>Round 13</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r14'}}><MenuItem>Round 14</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r15'}}><MenuItem>Round 15</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r16'}}><MenuItem>Round 16</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r17'}}><MenuItem>Round 17</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r18'}}><MenuItem>Round 18</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r19'}}><MenuItem>Round 19</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r20'}}><MenuItem>Round 20</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r21'}}><MenuItem>Round 21</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r22'}}><MenuItem>Round 22</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r23'}}><MenuItem>Round 23</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r24'}}><MenuItem>Round 24</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r25'}}><MenuItem>Round 25</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r26'}}><MenuItem>Round 26</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r27'}}><MenuItem>Round 27</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r28'}}><MenuItem>Round 28</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r29'}}><MenuItem>Round 29</MenuItem></LinkContainer>
            <LinkContainer to={{pathname: 'r30'}}><MenuItem>Round 30</MenuItem></LinkContainer>
          </DropdownButton>
        </div>
      </div>
    )
  }
}