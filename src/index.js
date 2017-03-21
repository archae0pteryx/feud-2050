import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './layout'

import Round1 from './components/rounds/round_1'
import Round2 from './components/rounds/round_2'
import Round3 from './components/rounds/round_3'
import Round4 from './components/rounds/round_4'
import Round5 from './components/rounds/round_5'
import Round6 from './components/rounds/round_6'
import Round7 from './components/rounds/round_7'
import Round8 from './components/rounds/round_8'
import Round9 from './components/rounds/round_9'
import Round10 from './components/rounds/round_10'
import Round11 from './components/rounds/round_11'
import Round12 from './components/rounds/round_12'
import Round13 from './components/rounds/round_13'

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
    <Route path="r6" component={Round6}/>
    <Route path="r7" component={Round7}/>
    <Route path="r8" component={Round8}/>
    <Route path="r9" component={Round9}/>
    <Route path="r10" component={Round10}/>
    <Route path="r11" component={Round11}/>
    <Route path="r12" component={Round12}/>
    <Route path="r13" component={Round13}/>
  </Route>
</Router>, document.getElementById('root'))