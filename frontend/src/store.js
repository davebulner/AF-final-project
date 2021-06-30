import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../src/reducers/userReducers.js'
import { conDetailsDeleteReducer, conListReducer, conUnApprovedReduceer, conDetailsUpdateReducer, conDetailsReducer } from '../src/reducers/conferenceReducer.js'
import { conApprovedReduceer } from '../src/reducers/conferenceReducer.js'
import { userRegisterReducer } from '../src/reducers/userReducers.js'
import { conferenceReducer } from '../src/reducers/adminConferenceReducer.js'
import { researcherInsert } from './reducers/researcherReducer.js'
import { workshopInsert } from './reducers/workshopReducer.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    listCon: conListReducer,
    appCon: conApprovedReduceer,
    unappCon: conUnApprovedReduceer,
    userRegister: userRegisterReducer,
    appConference: conferenceReducer,
    deleteCon: conDetailsDeleteReducer,
    updateCon: conDetailsUpdateReducer,
    ConsDetails: conDetailsReducer,
    researcherInsert: researcherInsert,
    workshopInsert: workshopInsert,
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