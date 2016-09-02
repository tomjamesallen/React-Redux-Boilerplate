import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './redux/createStore'
import App from './components/App.react'

const rootEl = document.getElementById('react-container')

ReactDOM.render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  rootEl
)
