import { fromJS, List } from 'immutable'
import { ITEM } from '../actions/types'

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null,
})

export default function exampleReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM.SAVEUSER:
    case ITEM.DELETEUSER:
    case ITEM.SAVEUSERSUCCESS:
    case ITEM.DELETEUSERSUCCESS:
    case ITEM.UPDATEUSER:
    case ITEM.UPDATEUSERSUCCESS:
    case ITEM.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
