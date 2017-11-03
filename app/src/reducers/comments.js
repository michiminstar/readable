import * as Types from '../actions/constants'

function comments(state = {}, action) {
  const { comments, commentId, parentId, option } = action

  switch(action.type) {
    case Types.LOAD_COMMENTS:
      return {
        ...state,
        [parentId]: comments
      }
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
