const initState = {
  Menu: []
}

const airtableReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FETCH_MENU':
      return {...state, Menu: action.payload};
    default:
      return state
  }
};

export default airtableReducer;