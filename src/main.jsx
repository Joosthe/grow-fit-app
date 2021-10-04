import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App'
import './index.css';
import './App.scss';
import { ErrorProvider } from './Contexts/ErrorContext';
import { UserProvider } from './Contexts/UserContext';
import { UploadProvider} from './Contexts/UploadContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UploadProvider>
      <ErrorProvider>
      <UserProvider>    
        <App />
      </UserProvider>
      </ErrorProvider>
      </UploadProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
