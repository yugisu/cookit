import { RecipeType } from 'types/recipe'

import * as actions from './types'

type RecipeState = {
  items: Record<RecipeType['id'], RecipeType>
  keys: RecipeType['id'][]
  loading: boolean
  error: string | null
}

const initialState: RecipeState = {
  items: {},
  keys: [],
  loading: true,
  error: null,
}

export const recipeReducer = (state = initialState, action: actions.RecipeAction) => {
  switch (action.type) {
    case actions.RECIPES_FETCH_INIT:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case actions.RECIPES_FETCH_SUCCESS:
      const keys = action.payload.map(recipe => recipe.id)
      const items = action.payload.reduce((acc, recipe) => ({ ...acc, [recipe.id]: recipe }), {})

      return {
        ...state,
        keys: [...state.keys, ...keys],
        items: { ...state.items, ...items },
        loading: false,
        error: null,
      }

    case actions.RECIPES_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return state
  }
}
