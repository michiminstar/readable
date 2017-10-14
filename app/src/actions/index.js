import * as Types from './constants'

export const getCategories = categories => {
  console.log('Action: ', categories)

  return {
    type: Types.LOAD_CATEGORIES,
    categories
  }
}
