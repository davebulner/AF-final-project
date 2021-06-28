import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/homescreen'
import LoginScreen from './Screens/LoginScreen/loginScreen'
import RegisterScreen from './Screens/RegisterScreen/registerScreen'
import LoggedinHomeScreen from './Screens/loggedinHomeScreen/lggedInHomeScreen'
import AdminScreen from './components/Admin/adminDashboard/adminDashboard'
import EditorScreen from './Screens/EditorScreen/Editor dashboard/editorDashboard'
import appconlistScreen from './Screens/EditorScreen/approvedScreen'
import unappconlistScreen from './Screens/EditorScreen/unapprovedScreen'
import AdminConference from './components/Admin/adminConferenceDetails/adminConferenceDetails.js'

const App = () => {
      return (
            <Router>
                  <div className="main">
                        <Route path="/" component={HomeScreen} exact />
                        <Route path="/login" component={LoginScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/loggedInHome" component={LoggedinHomeScreen} />
                        <Route path="/admin" component={AdminScreen} />
                        <Route path="/editor" component={EditorScreen} />
                        <Route path="/applist" component={appconlistScreen} />
                        <Route path="/unapplist" component={unappconlistScreen} />
<<<<<<< HEAD
                        <Route path="/adminCon" component={AdminConference} />
=======


>>>>>>> ee13442350902d25f8fc1e4e46740eb6e379e6a9
                  </div>
            </Router>
      )
}

export default App