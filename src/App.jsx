import React from 'react'
import { Switch, Route as PublicRoute } from "react-router-dom";
import MainNav from './Components/Navigation/MainNav';
import FooterNav from './Components/Navigation/FooterNav';
import Home from './Components/Pages/GereralPages/Home';
import FourOhFour from './Components/Pages/GereralPages/FourOhFour';
import BasicPage from './Components/Pages/GereralPages/BasicPage';
import LoginPage from './Components/Pages/Userpages/LoginPage';
import RegisterPage from './Components/Pages/Userpages/Registerpage';
import ProfilePage from './Components/Pages/Userpages/ProfilePage';
import PrivateRoute from './Components/Routes/PrivateRoute';
import { useAuth } from './Contexts/authContext';
import MyGoals from './Components/Pages/Userpages/MyGoals';
import addContent from './Components/Pages/WorkoutPages/AddContent';

function App() {
  const {currentUser} = useAuth(); 
  return (
    <>
    <MainNav/>
    <div id="main-content" className={currentUser ? "loged-in" : ""}>
      <Switch>
        <PrivateRoute path="/add-content" extact component={addContent}/>
        <PrivateRoute path="/profile" exact component={ProfilePage} />
        <PrivateRoute path="/my-goals" exact component={MyGoals} />
        <PublicRoute exact path="/register" exact component={RegisterPage} />
        <PublicRoute exact path="/login"  component={LoginPage} />
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute path="/:slug" component={BasicPage} />
        <PublicRoute path="*" component={FourOhFour} />
      </Switch>
    </div>
    { currentUser && 
      <FooterNav/>
    }
    </>
  )
}

export default App
