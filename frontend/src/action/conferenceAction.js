import axios from 'axios'
import {
      CONFERENCE_LIST_REQUEST,
      CONFERENCE_LIST_SUCCESS,
      CONFERENCE_LIST_RESET,
      CONFERENCE_LIST_FAIL
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



