import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import FourOhFour from './Components/Pages/FourOhFour';
function App() {

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="*" >
        <FourOhFour />
      </Route>
    </Switch>
  )
}

export default App
