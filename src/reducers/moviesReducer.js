import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'

const initialState = fromJS({
  movieList: new List([]),
  movie: new List([]),
  fetching: false,
  success: false,
  error: null,
})
export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM.GETMOVIES:
    case ITEM.GETMOVIESSUCCESS:
    case ITEM.SAVEMOVIES:
    case ITEM.SAVEMOVIESSUCCESS:
      return state.merge(action.payload)
    default:
      return state
  }
}
