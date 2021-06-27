import {
      CONFERENCE_LIST_REQUEST,
      CONFERENCE_LIST_SUCCESS,
      CONFERENCE_LIST_FAIL,
      CONFERENCE_LIST_RESET
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
