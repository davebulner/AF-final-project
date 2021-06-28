import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../src/reducers/userReducers.js'
import { conListReducer, conUnApprovedReduceer } from '../src/reducers/conferenceReducer.js'
import { conApprovedReduceer } from '../src/reducers/conferenceReducer.js'
const reducer = combineReducers({
    userLogin: userLoginReducer,
    listCon: conListReducer,
    appCon: conApprovedReduceer,
    unappCon: conUnApprovedReduceer,
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