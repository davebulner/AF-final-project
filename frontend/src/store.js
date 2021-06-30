import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../src/reducers/userReducers.js'
import { conDetailsDeleteReducer, conListReducer, conUnApprovedReduceer, conDetailsUpdateReducer, conDetailsReducer, conCreateReducer } from '../src/reducers/conferenceReducer.js'
import { conApprovedReduceer } from '../src/reducers/conferenceReducer.js'
import { conferenceReducer, getEditorReducer } from '../src/reducers/adminReducers.js'
import { userRegisterReducer } from '../src/reducers/userReducers.js'
import { conferenceReducer, getEditorReducer, getReviwerReducer, getConferenceDetailsById, conferenceApprovedReducer, conferenceDeclinedReducer } from '../src/reducers/adminReducers.js'
import { newsListReducer } from '../src/reducers/newsReducers.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    listCon: conListReducer,
    appCon: conApprovedReduceer,
    unappCon: conUnApprovedReduceer,
    userRegister: userRegisterReducer,
    appConference: conferenceReducer,
    deleteCon: conDetailsDeleteReducer,
    editors: getEditorReducer,
    updateCon: conDetailsUpdateReducer,
    ConsDetails: conDetailsReducer,
    createConferenceDetails: conCreateReducer,
    reviwer: getReviwerReducer,
    listNews: newsListReducer,
    cDetails: getConferenceDetailsById,
    confApproved: conferenceApprovedReducer,
    confDecline: conferenceDeclinedReducer

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