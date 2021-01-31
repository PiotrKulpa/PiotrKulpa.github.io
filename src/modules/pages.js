export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  menu: {},
  home: {},
  blog: {},
  works: {},
  footer: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MENU':
      return {
        ...state,
        menu: action.payload
      }
    case 'UPDATE_HOME':
      return {
        ...state,
        home: action.payload
      }
    default:
      return state
  }
}