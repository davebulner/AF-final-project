import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/homescreen'
import LoginScreen from './Screens/LoginScreen/loginScreen'
import RegisterScreen from './Screens/RegisterScreen/registerScreen'

const App = () => {
      return (
            <Router>
                  <div className="main">
                        <Route path="/" component={HomeScreen} exact />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/register" component={RegisterScreen} />
                  </div>
            </Router>
      )
}

export default App