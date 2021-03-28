import { useSelector } from 'react-redux';
import useAirtableData from './utils/useAirtableData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import WorksPage from './pages/WorksPage';
import Layout from './components/Layout';

function App() {

  const menu = useSelector(({ airtableReducer }) => airtableReducer.loading)
  console.log(menu)

  useAirtableData('Menu', 'FETCH_MENU', menu);

  return (
    <Router>
      <Layout> 
        <Switch>
          <Route path="/about-me">
            <AboutPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/work">
            <WorksPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
