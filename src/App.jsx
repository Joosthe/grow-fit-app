import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainNav from './Components/Navigation/MainNav';
import FooterNav from './Components/Navigation/FooterNav';
import Home from './Components/Pages/Home';
import FourOhFour from './Components/Pages/FourOhFour';
import BasicPage from './Components/Pages/BasicPage';
import LoginPage from './Components/Pages/LogPages/LoginPage';
import RegisterPage from './Components/Pages/LogPages/Registerpage';
import './Components/Pages/styles/Global.scss';

function App() {
  return (
    <>
    <MainNav/>
    <div id="main-content">
      <Switch>
        <Route path="/profile" exact>
          <RegisterPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:slug">
          <BasicPage />
        </Route>
        <Route path="*" >
          <FourOhFour />
        </Route>
      </Switch>
    </div>
    <FooterNav/>
    </>
  )
}

export default App
