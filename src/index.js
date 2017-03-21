import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'

import Round1 from './components/rounds/round_1'
import Round2 from './components/rounds/round_2'
import Round3 from './components/rounds/round_3'
import Round4 from './components/rounds/round_4'
import Round5 from './components/rounds/round_5'

import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/index.css'

ReactDOM.render( 
<Router history={browserHistory}>
  <Route path="/" component={Layout}>
      <IndexRoute component={Round1} /> 
    <Route path="r1" component={Round1}/>
    <Route path="r2" component={Round2}/>
    <Route path="r3" component={Round3}/>
    <Route path="r4" component={Round4}/>
    <Route path="r5" component={Round5}/>
  </Route>
</Router>, document.getElementById('root'))