import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './App.scss'
import { CmsContextProvider } from './Contexts/cmsContext';
import { ErrorProvider } from './Contexts/ErrorContext';
import { UserProvider } from './Contexts/userContext';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorProvider>
      <CmsContextProvider>
      <UserProvider>    
        <App />
      </UserProvider>
      </CmsContextProvider>
      </ErrorProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
