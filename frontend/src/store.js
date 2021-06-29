import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../src/reducers/userReducers.js'
import { conDetailsDeleteReducer, conListReducer, conUnApprovedReduceer } from '../src/reducers/conferenceReducer.js'
import { conApprovedReduceer } from '../src/reducers/conferenceReducer.js'
import { conferenceReducer, getEditorReducer } from '../src/reducers/adminReducers.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    listCon: conListReducer,
    appCon: conApprovedReduceer,
    unappCon: conUnApprovedReduceer,
    appConference: conferenceReducer,
    deleteCon: conDetailsDeleteReducer,
    editors: getEditorReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

export default store