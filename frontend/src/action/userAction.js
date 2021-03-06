import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_SUCESS, USER_REGISTER_REQUEST, USER_DETAILS_REQUEST, USER_DETAILS_SUCESS, USER_DETAILS_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCESS, USER_UPDATE_FAIL, USER_UPDATE_RESET } from "../constants/userConstants"


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:8040/api/users/login', { email, password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const register = (name, email, password, isReasearcher, isWorkPresnter, isAtendee, insertDoc) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('http://localhost:8040/api/users/', { name, email, password, isReasearcher, isWorkPresnter, isAtendee, insertDoc },
            config
        )

        dispatch({
            type: USER_REGISTER_SUCESS,
            payload: data,
        })

        dispatch({
            type: USER_LOGIN_SUCESS,
            payload: data,
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.get(`http://localhost:8040/api/users/${id}`,
            config
        )

        dispatch({
            type: USER_DETAILS_SUCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}


export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST,
        })

        const {
            userLogin: { userInfo },
        } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.put(`http://localhost:8040/api/users/profile`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_SUCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}

