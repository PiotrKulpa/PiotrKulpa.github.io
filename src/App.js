import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();
  // const addPost = () => {
  //    dispatch({type: 'FETCH_POSTS', payload: [1,2,3]})
  //  }

  const menu = useSelector(({ airtableReducer }) => airtableReducer.Menu)
  console.log(menu)
  
  const getAirtableData = async (tableName, reducerName, reduxData, dispatch) => {
    const config = {
      method: 'get',
      url: 'https://api.airtable.com/v0/appyYmGsQlbpzb5Tu/Menu',
      headers: {
        'Authorization': 'Bearer keyW2vss3TsEPGfcu',
        'Content-Type': 'application/json',
        'Cookie': 'brw=brwtLImDCVfCCYHJh'
      },
    }
    if (reduxData.length === 0) {
      const response = await axios(config);
      const { data: { records = [] } = {} } = response || {};
      dispatch({ type: reducerName, payload: records })
    }

  };
  getAirtableData('Menu', 'FETCH_MENU', menu, dispatch)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
