import React from 'react'
import { Route, Link, BrowserRouter as Router, } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Layout from '../../components/Layout'

const App = () => (
  <Router>
  <Layout>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </Layout>
  </Router>
)

export default App
