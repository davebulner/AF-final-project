import {
    CONFERENCE_LIST_REQUEST_ADMIN,
    CONFERENCE_LIST_SUCCESS_ADMIN,
    CONFERENCE_LIST_FAIL_ADMIN,
    CONFERENCE_LIST_RESET_ADMIN,
    EDITORS_LIST_REQUEST_ADMIN,
    EDITORS_LIST_SUCCESS_ADMIN,
    EDITORS_LIST_FAIL_ADMIN,
    EDITORS_LIST_RESET_ADMIN,
    REVIWER_LIST_REQUEST_ADMIN,
    REVIWER_LIST_SUCCESS_ADMIN,
    REVIWER_LIST_FAIL_ADMIN,
    REVIWER_LIST_RESET_ADMIN,
    ADMIN_CONFERENCE_DETAILS_ID_REQUEST,
    ADMIN_CONFERENCE_DETAILS_ID_SUCCESS,
    ADMIN_CONFERENCE_DETAILS_ID_FAIL,
    ADMIN_CONFERENCE_DETAILS_ID_RESET,
    ADMIN_APPROVED_REQUEST,
    ADMIN_APPROVED_SUCCESS,
    ADMIN_APPROVED_FAIL

 
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
                return {}
          default:
                return state

    }
}



export const getEditorReducer = (state = { users: [] }, action) => {
      switch (action.type) {
            case EDITORS_LIST_REQUEST_ADMIN:
                  return { loading: true }
            case EDITORS_LIST_SUCCESS_ADMIN:
                  return { loading: false, users: action.payload }
            case EDITORS_LIST_FAIL_ADMIN:
                  return { loading: false, error: action.payload }
            case EDITORS_LIST_RESET_ADMIN:
                  return { users: [] }
            default:
                  return state
      }
  }

  export const getReviwerReducer = (state = { users: [] }, action) => {
      switch (action.type) {
            case REVIWER_LIST_REQUEST_ADMIN:
                  return { loading: true }
            case REVIWER_LIST_SUCCESS_ADMIN:
                  return { loading: false, users: action.payload }
            case REVIWER_LIST_FAIL_ADMIN:
                  return { loading: false, error: action.payload }
            case REVIWER_LIST_RESET_ADMIN:
                  return { users: [] }
            default:
                  return state
      }
  }

  export const getConferenceDetailsById = (state = { conferencedetails:[] }, action)  => {
      switch (action.type) {
            case ADMIN_CONFERENCE_DETAILS_ID_REQUEST:
                  return { loading: true }
            case ADMIN_CONFERENCE_DETAILS_ID_SUCCESS:
                  return { loading: false, conferencedetails: action.payload }
            case ADMIN_CONFERENCE_DETAILS_ID_FAIL:
                  return { loading: false, error: action.payload }
            case ADMIN_CONFERENCE_DETAILS_ID_RESET:
                  return { conferencedetails: [] }
            default:
                  return state
      }
  }

  export const conferenceApprovedReducer = (state = {conferencedetails: {}} , action) => {
        switch (action.type) {
            case ADMIN_APPROVED_REQUEST:
                    return { loading: true }
            case ADMIN_APPROVED_SUCCESS:
                  return { loading: false, success: true }
            case ADMIN_APPROVED_FAIL:
                  return { loading: false, error: action.payload}
            default:
                  return state
        }
  }

  




