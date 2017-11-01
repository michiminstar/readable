import * as Types from '../actions/constants'

function comments(state = {}, action) {
  const { comments, parentId } = action

  switch(action.type) {
    case Types.LOAD_COMMENTS:
      return {
        ...state,
        [parentId]: comments
      }
    default:
      return state
  }
}

export default comments
