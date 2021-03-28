const initState = {
  loading: false,
  error: false,
  Menu: [],
  About: [],
  Work: [],
}

const airtableReducer = (state = initState, action) => {
  switch(action.type) {
    case 'UPDATE_LOADER':
      return {...state, loading: action.payload};
    case 'FETCH_MENU':
      return {...state, Menu: action.payload};
    case 'FETCH_ABOUT':
      return {...state, About: action.payload};
    case 'FETCH_WORK':
      return {...state, Work: action.payload};
    default:
      return state
  }
};

export default airtableReducer;