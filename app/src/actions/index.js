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
export const deletePost = postId => dispatch =>
  API.deletePost(postId).then(post =>
    dispatch({
      type: Types.DELETE_POST,
      postId
    })
  )
