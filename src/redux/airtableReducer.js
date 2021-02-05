const initState = {
  loading: false,
  error: false,
  Menu: []
}

const airtableReducer = (state = initState, action) => {
  switch(action.type) {
    case 'UPDATE_LOADER':
      return {...state, loading: action.payload};
    case 'FETCH_MENU':
      return {...state, Menu: action.payload};
    default:
      return state
  }
};

export default airtableReducer;