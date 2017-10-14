import * as Types from '../actions/constants'

const initialState = {
  categories: [],
  category: '',
}

function categories(state = initialState, action) {
  const { categories } = action

  switch (action.type) {
    case Types.LOAD_CATEGORIES:
      return {
        ...state,
        categories
      }
    default:
      return state
  }
}

export default categories
