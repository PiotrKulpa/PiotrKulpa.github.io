import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import useAirtableData from './utils/useAirtableData';

function App() {

  const menu = useSelector(({ airtableReducer }) => airtableReducer.loading)
  console.log(menu)
 
  useAirtableData('Menu', 'FETCH_MENU', menu);

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
