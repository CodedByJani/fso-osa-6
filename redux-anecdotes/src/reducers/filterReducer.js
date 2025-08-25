const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

// Action creator
export const setFilter = (value) => ({
  type: 'SET_FILTER',
  payload: value
})

export default filterReducer
