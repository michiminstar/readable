import * as Types from '../actions/constants'

function comments(state = {}, action) {
  const { comments, commentId, parentId, option, updatedComment } = action

  switch(action.type) {
    case Types.LOAD_COMMENTS:
      return {
        ...state,
        [parentId]: comments
      }
    case Types.ADD_COMMENT:
      console.log('NEW COMMENT', action.comments)
      return {
        ...state,
        [parentId]: comments
      }
    case Types.EDIT_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            comment = updatedComment
          }
          return comment
        })
      }
    case Types.DELETE_COMMENT:
      return state
    case Types.UPVOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            if (option === "upVote") {
              comment.voteScore++
            }
          }
          return comment
        })
      }
    case Types.DOWNVOTE_COMMENT:
      return {
        ...state,
        [parentId]: state[parentId].map(comment => {
          if(comment.id === commentId) {
            if (option === "downVote") {
              comment.voteScore--
            }
          }
          return comment
        })
      }
    default:
      return state
  }
}

export default comments
