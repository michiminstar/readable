import * as Types from '../actions/constants'

function categories(state = [], action) {
  const { categories } = action

  switch (action.type) {
    case Types.LOAD_CATEGORIES:
      return categories
    default:
      return state
  }
}

export default categories
