import * as Types from '../actions/constants'

function posts(state = [], action) {
  const { posts } = action

  switch (action.type) {
    case Types.LOAD_POSTS:
      return posts

    default:
      return state
  }
}

export default posts
