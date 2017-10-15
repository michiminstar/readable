import * as Types from './constants'
import * as API from '../utils/ReadableAPI'

export const loadCategories = () => dispatch =>
  API.getCategories().then(({ categories }) =>
    dispatch({
      type: Types.LOAD_CATEGORIES,
      categories
    })
  )
