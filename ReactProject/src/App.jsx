import React, { useState, useRef, useEffect } from 'react';
import Clock from './Clock'
import WeatherDashboard from './Weather'
import TodoDash from './TodoDash'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Clock/>
        <h1>Jasper's Dashboard</h1>
        <WeatherDashboard/>
      </div>
      <div className = "todoContainer">
        <TodoDash/>
      </div>
    </div>
  )
}
