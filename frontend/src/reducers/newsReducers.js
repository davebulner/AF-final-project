import {
      NEWS_LIST_REQUEST,
      NEWS_LIST_SUCCESS,
      NEWS_LIST_FAIL,
      NEWS_LIST_RESET
} from '../constants/newsConstants.js'

export const newsListReducer = (state = { news: [] }, action) => {
      switch (action.type) {
            case NEWS_LIST_REQUEST:
                  return { loading: true }
            case NEWS_LIST_SUCCESS:
                  return { loading: false, news: action.payload }
            case NEWS_LIST_FAIL:
                  return { loading: false, error: action.payload }
            case NEWS_LIST_RESET:
                  return { news: [] }
            default:
                  return state
      }
}