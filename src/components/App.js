import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
// import ControlBtn from './ControlBtn';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{count:0})
  return (
    <div className="App">
      <span id="counter">
        Count:{state.count}
      </span>
      <button
      id="increment-btn"
        onClick={() => {
          dispatch({ type: "Inc" });
        }}
      >
        Inc
      </button>
      <button
      id="decrement-btn"
        onClick={() => {
          dispatch({ type: "Dec" });
        }}
      >
        Dec
      </button>
    </div>
    // <div id="main">
    //   <span id="counter">{state.count}</span>
    //   <ControlBtn id="increment-btn" dispatch={dispatch} state={state} payload="Inc"/>
    //   <ControlBtn id="decrement-btn" dispatch={dispatch} state={state} payload="Dec"/>
    // </div>
  )
}


export default App;
