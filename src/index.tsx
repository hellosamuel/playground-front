import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createStore from './modules'
import { check } from './modules/user/slice'
import * as serviceWorker from './serviceWorker'
import App from './App'

const store = createStore()

function loginCheck() {
  try {
    const user = localStorage.getItem('user')
    if (!user) return

    store.dispatch(check())
  } catch (e) {
    console.log('localStorage Error')
  }
}

loginCheck()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
