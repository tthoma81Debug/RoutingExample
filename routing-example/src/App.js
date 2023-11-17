import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pageOne" element={<PageOne />} />
          <Route path="/pageTwo/:username/:password" element={<PageTwo />} />
        </Routes>
      </Router>
    );
}


function Home() {
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
      <ul>
          <li>
              <Link to="/pageOne">Page One</Link>
          </li>
          <li>
              <Link to="/pageTwo">Page Two</Link>
          </li>
      </ul>
      <hr />
    </header>
  </div>
  );
}

export default App;