import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './App.scss'
import { ErrorProvider } from './Contexts/ErrorContext';
import { UserProvider } from './Contexts/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorProvider>
      <UserProvider>    
        <App />
      </UserProvider>
      </ErrorProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
