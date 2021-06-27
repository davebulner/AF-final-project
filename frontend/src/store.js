import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../src/reducers/userReducers.js'
<<<<<<< HEAD
import { conListReducer } from '../src/reducers/conferenceReducer.js'
=======
>>>>>>> bfa507b79823cd985943216fa9418ada89e7d9a8

const reducer = combineReducers({
    userLogin: userLoginReducer,
    listCon: conListReducer
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