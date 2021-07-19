const defaultState = {
  sortBy: {
    type: 'date',
    order: 'desc',
  }
}

const SORT_BY = 'SORT_BY'

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SORT_BY:
      return { ...state, sortBy: action.payload }
    default:
      return state
  }
}

export const setSortBy = (payload) => ({ type: SORT_BY, payload })