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
import profileScreen from './Screens/ProfileScreen/profileScreen'
import AdminConference from './components/Admin/adminConferenceDetails/adminConferenceDetails.js'
import getAdminEditor from './components/Admin/adminUserDetails/adminEditorsList.js'
import getAdminReviwer from './components/Admin/adminUserDetails/adminReviwer.js'
import ConferenceDetailsUpdate from './Screens/ConferenceDetailsEditScreen/conferenceDetailsEditScreen.js'
import newsListScreen from './Screens/NewsListScreen/newsListScreen'


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
                        <Route path="/adminCon" component={AdminConference} />
                        <Route path="/adminEditors" component={getAdminEditor} />
                        <Route path="/adminReviwer" component={getAdminReviwer} />
                        <Route path="/con/:id" component={ConferenceDetailsUpdate} />
<<<<<<< HEAD
                  
=======
                        <Route path="/newslist" component={newsListScreen} />
>>>>>>> 62070b82faefca9a03d9f770c52d578131df0ad3
                  </div>
            </Router>
      )
}

export default App