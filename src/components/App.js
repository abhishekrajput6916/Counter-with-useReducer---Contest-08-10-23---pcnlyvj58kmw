import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
import ControlBtn from './ControlBtn';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{count:0})
  return (
    <div id="main">
      <span id="counter">{state.count}</span>
      <ControlBtn id="increment-btn" dispatch={dispatch} payload="Inc"/>
      <ControlBtn id="decrement-btn" dispatch={dispatch} payload="Dec"/>
    </div>
  )
}


export default App;
