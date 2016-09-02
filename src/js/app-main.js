import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './redux/createStore'
import reducer from './redux/reducer'
import App from './components/App.react'

const rootEl = document.getElementById('react-container')

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  rootEl
)
