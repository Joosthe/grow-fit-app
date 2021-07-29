import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import FourOhFour from './Components/Pages/FourOhFour';
import BasicPage from './Components/Pages/BasicPage';
import MainNav from './Components/Navigation/MainNav';
import FooterMenu from './Components/Navigation/FooterMenu';
import './App.css';
function App() {
  return (
    <>
    <MainNav/>
    <Switch>
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
    <FooterMenu/>
    </>
  )
}

export default App
