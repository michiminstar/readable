import * as Types from './constants'
import * as API from '../utils/ReadableAPI'

export const getPostComments = (parentId) => {
  return (dispatch) => {
    API.getPostComments(parentId).then(comments => {
      dispatch({
        type: Types.LOAD_COMMENTS,
        parentId,
        comments
      })
    })
  }
}

export const addPostComment = (comment, parentId, callback) => {
  return (dispatch) => {
    API.addPostComment(comment).then(comment => {
      dispatch({
        type: Types.ADD_COMMENT,
        parentId,
        comment
      })
    }).then(() => callback())
  }
}

export const editComment = (commentId, parentId, timestamp, body, callback) => {
  return (dispatch) => {
    API.editComment(commentId, body, timestamp).then(updatedComment => {
        dispatch({
          type: Types.EDIT_COMMENT,
          updatedComment,
          commentId,
          parentId
        })
      }).then(() => callback())
  }
}

export const deletePostComment = (commentId, callback) => {
  return (dispatch) => {
    API.deletePostComment(commentId).then(() => callback())
    dispatch({
      type: Types.DELETE_COMMENT,
      commentId
    })
  }
}

export const upVoteComment = (commentId, parentId, option) => {
  return (dispatch) => {
    API.voteComment(commentId, option).then(comment => {
      dispatch({
        type: Types.UPVOTE_COMMENT,
        commentId,
        parentId,
        option: 'upVote'
      })
    })
  }
}

export const downVoteComment = (commentId, parentId, option) => {
  return (dispatch) => {
    API.voteComment(commentId, option).then(comment => {
      dispatch({
        type: Types.DOWNVOTE_COMMENT,
        commentId,
        parentId,
        option: 'downVote'
      })
    })
  }
}
