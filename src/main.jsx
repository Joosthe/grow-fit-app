import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './Contexts/authContext';
import App from './App'
import './App.scss'
import { CmsContextProvider } from './Contexts/cmsContext';
import { ErrorProvider } from './Contexts/ErrorContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorProvider>
      <AuthProvider>
      <CmsContextProvider>
        <App />
      </CmsContextProvider>
      </AuthProvider>
      </ErrorProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
