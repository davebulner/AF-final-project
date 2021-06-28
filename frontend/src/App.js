import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/homescreen'
import LoginScreen from './Screens/LoginScreen/loginScreen'
import RegisterScreen from './Screens/RegisterScreen/registerScreen'
<<<<<<< HEAD
import AdminScreen from './components/Admin/adminDashboard/adminDashboard'
=======
import EditorScreen from './Screens/EditorScreen/editorScreen'
import appconlistScreen from './Screens/EditorScreen/approvedScreen'
import unappconlistScreen from './Screens/EditorScreen/unapprovedScreen'
>>>>>>> 67f0c88bff1014eeb375466fc0a3f6e6a184b260

const App = () => {
      return (
            <Router>
                  <div className="main">
                        <Route path="/" component={HomeScreen} exact />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/register" component={RegisterScreen} />
<<<<<<< HEAD
                        <Route path="/admin" component={AdminScreen} />
=======
                        <Route path="/editor" component={EditorScreen} />
                        <Route path="/applist" component={appconlistScreen} />
                        <Route path="/unapplist" component={unappconlistScreen} />
>>>>>>> 67f0c88bff1014eeb375466fc0a3f6e6a184b260
                  </div>
            </Router>
      )
}

export default App