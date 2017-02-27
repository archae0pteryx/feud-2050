import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout'
import { Provider } from 'react-redux'
import store from './redux/store'
import './assets/css/index.css'

const app = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>, app
  
);
