import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageOne from './PageOne';
import { useParams } from 'react-router-dom';


function PageTwo() {

  const { username, password } = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Username is {username} and password is {password}
          This is page 2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Stout :)
        </a>
      </header>
    </div>
  );
}

export default PageTwo;