import axios from 'axios'
import {
      NEWS_LIST_REQUEST,
      NEWS_LIST_SUCCESS,
      NEWS_LIST_FAIL,

} from '../constants/newsConstants'

export const listAllNews = () => async (dispatch) => {
      try {
            dispatch({
                  type: NEWS_LIST_REQUEST,
            })

            const { data } = await axios.get('http://localhost:8040/api/news/allNews')
            dispatch({
                  type: NEWS_LIST_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: NEWS_LIST_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}