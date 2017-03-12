import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'
import GameBoard from './components/gameboard'
import Editor from './components/editor'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/index.css'

ReactDOM.render( 
<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={GameBoard}/>
    <Route path="edit" component={Editor}/>
  </Route>
</Router>, document.getElementById('root'));