import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'
import GameBoard from './containers/gameboard'
import Controller from './components/controller'
import Round1 from './components/round_1'
// import Editor from './components/editor'
// import Intro from './components/intro'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/index.css'

ReactDOM.render( 
<Router history={browserHistory}>
  <Route path="/" component={Layout}>
      <IndexRoute component={Round1} /> 
    <Route path="board" component={GameBoard}/>
    <Route path="controller" component={Controller}/>
  </Route>
</Router>, document.getElementById('root'))