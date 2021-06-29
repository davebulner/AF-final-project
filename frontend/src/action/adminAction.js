import axios from 'axios'
import {
      CONFERENCE_APPROVED_LIST_REQUEST_ADMIN,
      CONFERENCE_APPROVED_LIST_SUCCESS_ADMIN,
      CONFERENCE_APPROVED_LIST_FAIL_ADMIN,
      CONFERENCE_LIST_REQUEST_ADMIN,
      CONFERENCE_LIST_SUCCESS_ADMIN,
      CONFERENCE_LIST_FAIL_ADMIN,
      EDITORS_LIST_REQUEST_ADMIN,
      EDITORS_LIST_SUCCESS_ADMIN,
      EDITORS_LIST_FAIL_ADMIN
} from '../constants/adminConstants.js'



export const AdminconferenceList = () => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_LIST_REQUEST_ADMIN,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  }
            }

            const { data } = await axios.get('http://localhost:8040/api/conDetails/', config)

            dispatch({
                  type: CONFERENCE_LIST_SUCCESS_ADMIN,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_LIST_FAIL_ADMIN,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const approvedByAdmin = (conferencedetails) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: CONFERENCE_APPROVED_LIST_REQUEST_ADMIN,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  }
            }

            const { data } = await axios.put(`http://localhost:8040/api/admin/${conferencedetails._id}`)

            dispatch({
                  type: CONFERENCE_APPROVED_LIST_SUCCESS_ADMIN,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_APPROVED_LIST_FAIL_ADMIN,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const getEditorsList = () => async(dispatch, getState) => {
      try {
            dispatch({
                  type: EDITORS_LIST_REQUEST_ADMIN,
            })

            const {
                  userLogin: { userInfo },
            } = getState()

            const config = {
                  headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                  }
            }

            const { data } = await axios.get('http://localhost:8040/api/admin/', config)

            dispatch({
                  type: EDITORS_LIST_SUCCESS_ADMIN,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: EDITORS_LIST_FAIL_ADMIN,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

