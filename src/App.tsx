import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {useNavigate} from 'react-router';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React TASDASDAS
        </a>
      </header>
    </div>
  );
}

export default App;
