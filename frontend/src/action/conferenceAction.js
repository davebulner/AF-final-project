import axios from 'axios'
import {
      CONFERENCE_LIST_REQUEST,
      CONFERENCE_LIST_SUCCESS,
      CONFERENCE_LIST_RESET,
      CONFERENCE_LIST_FAIL,
      CONFERENCE_APPROVED_LIST_REQUEST,
      CONFERENCE_APPROVED_LIST_SUCCESS,
      CONFERENCE_APPROVED_LIST_RESET,
      CONFERENCE_APPROVED_LIST_FAIL,
      CONFERENCE_UNAPPROVED_LIST_REQUEST,
      CONFERENCE_UNAPPROVED_LIST_SUCCESS,
      CONFERENCE_UNAPPROVED_LIST_FAIL,
      CONFERENCE_UNAPPROVED_LIST_RESET
} from '../constants/conferenceConstants'

export const listConDetails = () => async (dispatch) => {
      try {
            dispatch({
                  type: CONFERENCE_LIST_REQUEST,
            })

            const { data } = await axios.get('http://localhost:8040/api/conDetails/')

            dispatch({
                  type: CONFERENCE_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const appConList = () => async (dispatch) => {
      try {
            dispatch({
                  type: CONFERENCE_APPROVED_LIST_REQUEST,
            })

            const { data } = await axios.get('http://localhost:8040/api/conDetails/approvedCon')

            dispatch({
                  type: CONFERENCE_APPROVED_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_APPROVED_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}

export const unappConList = () => async (dispatch) => {
      try {
            dispatch({
                  type: CONFERENCE_UNAPPROVED_LIST_REQUEST,
            })

            const { data } = await axios.get('http://localhost:8040/api/conDetails/unAprrovedCon')

            dispatch({
                  type: CONFERENCE_UNAPPROVED_LIST_SUCCESS,
                  payload: data
            })
      } catch (error) {
            dispatch({
                  type: CONFERENCE_UNAPPROVED_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}
