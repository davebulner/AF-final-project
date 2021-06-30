import {
    CONFERENCE_LIST_REQUEST_ADMIN,
    CONFERENCE_LIST_SUCCESS_ADMIN,
    CONFERENCE_LIST_FAIL_ADMIN,
    CONFERENCE_LIST_RESET_ADMIN,
    CONFERENCE_APPROVED_LIST_REQUEST_ADMIN,
    CONFERENCE_APPROVED_LIST_SUCCESS_ADMIN,
    CONFERENCE_APPROVED_LIST_FAIL_ADMIN,
    CONFERENCE_APPROVED_LIST_RESET_ADMIN
 
} from '../constants/adminConstants'


export const conferenceReducer = (state = { conferencedetails: [] }, action) => {
    switch (action.type) {
          case CONFERENCE_LIST_REQUEST_ADMIN:
                return { loading: true }
          case CONFERENCE_LIST_SUCCESS_ADMIN:
                return { loading: false, conferencedetails: action.payload }
          case CONFERENCE_LIST_FAIL_ADMIN:
                return { loading: false, error: action.payload }
          case CONFERENCE_LIST_RESET_ADMIN:
                return { conferencedetails: [] }
          default:
                return state

    }
}

export const conferenceApprovedReduceer = (state = { conferencedetails: [] }, action) => {
    switch (action.type) {
          case CONFERENCE_APPROVED_LIST_REQUEST_ADMIN:
                return { loading: true }
          case CONFERENCE_APPROVED_LIST_SUCCESS_ADMIN:
                return { loading: false, conferencedetails: action.payload }
          case CONFERENCE_APPROVED_LIST_FAIL_ADMIN:
                return { loading: false, error: action.payload }
          case CONFERENCE_APPROVED_LIST_RESET_ADMIN:
                return { conferencedetails: [] }
          default:
                return state
    }
}
