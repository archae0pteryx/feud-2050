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
import Round14 from './components/rounds/round_14'
import Round15 from './components/rounds/round_15'
import Round16 from './components/rounds/round_16'
import Round17 from './components/rounds/round_17'
import Round18 from './components/rounds/round_18'
import Round19 from './components/rounds/round_19'
import Round20 from './components/rounds/round_20'
import Round21 from './components/rounds/round_21'
import Round22 from './components/rounds/round_22'
import Round23 from './components/rounds/round_23'
import Round24 from './components/rounds/round_24'
import Round25 from './components/rounds/round_25'
import Round26 from './components/rounds/round_26'
import Round27 from './components/rounds/round_27'
import Round28 from './components/rounds/round_28'
import Round29 from './components/rounds/round_29'
import Round30 from './components/rounds/round_30'
import Controller from './components/controller'
import Intro from './components/intro'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './assets/css/index.css'

ReactDOM.render( 
<Router history={browserHistory}>
  <Route path="/" component={Layout}>
      <IndexRoute component={Intro} /> 
    <Route path="controller" component={Controller}/>
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
    <Route path="r14" component={Round14}/>
    <Route path="r15" component={Round15}/>
    <Route path="r16" component={Round16}/>
    <Route path="r17" component={Round17}/>
    <Route path="r18" component={Round18}/>
    <Route path="r19" component={Round19}/>
    <Route path="r20" component={Round20}/>
    <Route path="r21" component={Round21}/>
    <Route path="r22" component={Round22}/>
    <Route path="r23" component={Round23}/>
    <Route path="r24" component={Round24}/>
    <Route path="r25" component={Round25}/>
    <Route path="r26" component={Round26}/>
    <Route path="r27" component={Round27}/>
    <Route path="r28" component={Round28}/>
    <Route path="r29" component={Round29}/>
    <Route path="r30" component={Round30}/>
  </Route>
</Router>, document.getElementById('root'))