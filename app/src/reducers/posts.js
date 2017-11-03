import * as Types from '../actions/constants'
import sortBy from 'sort-by'

function posts(state = [], action) {
  const { posts, post, postId, updatedPost, sortKey } = action

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
    case Types.UPVOTE_POST:
      return state.map(post => {
        if (post.id === action.postId) {
          if (action.option === "upVote") {
            post.voteScore++
          }
        }
        return post
      })
    case Types.DOWNVOTE_POST:
      return state.map(post => {
        if (post.id === action.postId) {
          if (action.option === "downVote") {
            post.voteScore--
          }
        }
        return post
      })
    case Types.SORT_POST:
      return [].concat(state.sort(sortBy("-"+sortKey)))
    default:
      return state
  }
}

export default posts
