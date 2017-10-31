import * as Types from '../actions/constants'

function posts(state = [], action) {
  const { posts, post, postId, updatedPost } = action

  switch (action.type) {
    case Types.LOAD_POSTS:
      return posts.filter(post => !(post.deleted))
    case Types.ADD_POST:
      return state.concat([post])
    case Types.EDIT_POST:
      return state.map(post => {
        if(post.id === postId) {
          post = updatedPost
        }
        return post
      })
    case Types.DELETE_POST:
      return state.filter(post => post.id !== postId)
    default:
      return state
  }
}

export default posts
