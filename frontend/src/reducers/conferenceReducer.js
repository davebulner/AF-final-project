import {
      CONFERENCE_LIST_REQUEST,
      CONFERENCE_LIST_SUCCESS,
      CONFERENCE_LIST_FAIL,
      CONFERENCE_LIST_RESET,
      CONFERENCE_APPROVED_LIST_REQUEST,
      CONFERENCE_APPROVED_LIST_SUCCESS,
      CONFERENCE_APPROVED_LIST_FAIL,
      CONFERENCE_APPROVED_LIST_RESET,
      CONFERENCE_UNAPPROVED_LIST_REQUEST,
      CONFERENCE_UNAPPROVED_LIST_SUCCESS,
      CONFERENCE_UNAPPROVED_LIST_FAIL,
      CONFERENCE_UNAPPROVED_LIST_RESET,
      CONFERENCE_DETAILS_DELETE_REQUEST,
      CONFERENCE_DETAILS_DELETE_SUCCESS,
      CONFERENCE_DETAILS_DELETE_FAIL,
} from '../constants/conferenceConstants.js'


export const conListReducer = (state = { conferencedetails: [] }, action) => {
      switch (action.type) {
            case CONFERENCE_LIST_REQUEST:
                  return { loading: true }
            case CONFERENCE_LIST_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_LIST_RESET:
                  return { conferencedetails: [] }
            default:
                  return state

      }
}

export const conApprovedReduceer = (state = { conferencedetails: [] }, action) => {
      switch (action.type) {
            case CONFERENCE_APPROVED_LIST_REQUEST:
                  return { loading: true }
            case CONFERENCE_APPROVED_LIST_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_APPROVED_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_APPROVED_LIST_RESET:
                  return { conferencedetails: [] }
            default:
                  return state
      }
}

export const conUnApprovedReduceer = (state = { conferencedetails: [] }, action) => {
      switch (action.type) {
            case CONFERENCE_UNAPPROVED_LIST_REQUEST:
                  return { loading: true }
            case CONFERENCE_UNAPPROVED_LIST_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case CONFERENCE_UNAPPROVED_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case CONFERENCE_UNAPPROVED_LIST_RESET:
                  return { conferencedetails: [] }
            default:
                  return state
      }
}

export const conDetailsDelete = (state = {}, action) => {
      switch (action.type) {
            case CONFERENCE_DETAILS_DELETE_REQUEST:
                  return { loading: true }
            case CONFERENCE_DETAILS_DELETE_SUCCESS:
                  return { loading: false, success: true }
            case CONFERENCE_DETAILS_DELETE_FAIL:
                  return { loading: false, error: action.payload }
            default:
                  return state
      }
}