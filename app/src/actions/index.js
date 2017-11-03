import * as Types from './constants'
import * as API from '../utils/ReadableAPI'

export const getCategories = () => dispatch =>
  API.getCategories().then(({ categories }) =>
    dispatch({
      type: Types.LOAD_CATEGORIES,
      categories
    })
  )

export const getPosts = () => {
  return (dispatch) => {
    API.getPosts().then(posts => {
      dispatch({
        type: Types.LOAD_POSTS,
        posts
      })
    })
  }
}

export const getPostsByCategory = (category) => {
  return (dispatch) => {
    API.getPostsByCategory(category).then(posts => {
      dispatch({
        type: Types.LOAD_POSTS_BY_CATEGORY,
        posts
      })
    })
  }
}

export const createPost = (post, callback) => {
  return (dispatch) => {
    API.addPost(post).then(() => callback())
    dispatch({
      type: Types.ADD_POST,
      post
    })
  }
}

export const editPost = (postId, title, body, callback) => {
  return (dispatch) => {
    API.editPost(postId, title, body).then(updatedPost => {
      dispatch({
        type: Types.EDIT_POST,
        updatedPost,
        postId
      })
    }).then(() => callback())
  }
}

export const deletePost = postId => dispatch =>
  API.deletePost(postId).then(post =>
    dispatch({
      type: Types.DELETE_POST,
      postId
    })
  )

export const upVotePost = (postId, option) => {
  return (dispatch) => {
    API.votePost(postId, option).then(post => {
      dispatch({
        type: Types.UPVOTE_POST,
        postId,
        option: 'upVote'
      })
    })
  }
}

export const downVotePost = (postId, option) => {
  return (dispatch) => {
    API.votePost(postId, option).then(post => {
      dispatch({
        type: Types.DOWNVOTE_POST,
        postId,
        option: 'downVote'
      })
    })
  }
}

export const sortPost = (sortKey) => {
  return dispatch => {
    dispatch({
      type: Types.SORT_POST,
      sortKey
    })
  }
}

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
