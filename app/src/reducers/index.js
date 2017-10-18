import { combineReducers } from 'redux'
import * as Types from '../actions/constants'
import categories from './categories'
import posts from './posts'

export default combineReducers({
  categories,
  posts
})
