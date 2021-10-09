import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './index.css';
import './App.scss';
import { ErrorProvider } from './Contexts/ErrorContext';
import { UserProvider } from './Contexts/UserContext';
import {CloudinaryContext} from 'cloudinary-react';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CloudinaryContext cloudName="paujoost">
      <ErrorProvider>
      <UserProvider>    
        <App />
      </UserProvider>
      </ErrorProvider>
      </CloudinaryContext>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
