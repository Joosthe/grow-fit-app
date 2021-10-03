import React from 'react'
import { Switch, Route as PublicRoute } from "react-router-dom";
import Error from './Components/PageComponents/Error/Error';
import MainNav from './Components/Navigation/MainNav';
import FooterNav from './Components/Navigation/FooterNav';
import Home from './Components/Pages/GereralPages/Home';
import FourOhFour from './Components/Pages/GereralPages/FourOhFour';
import BasicPage from './Components/Pages/GereralPages/BasicPage';
import LoginPage from './Components/Pages/Userpages/LoginPage';
import RegisterPage from './Components/Pages/Userpages/Registerpage';
import ProfilePage from './Components/Pages/Userpages/ProfilePage';
import MyGoals from './Components/Pages/Userpages/MyGoals';
import AddContent from './Components/Pages/WorkoutPages/AddContent';
import NewEntry from './Components/Pages/WorkoutPages/NewEntry';
import ChooseWorkout from './Components/Pages/WorkoutPages/ChooseWorkout';
import CreateWorkout from './Components/Pages/WorkoutPages/CreateWorkout';
import CreateExercise from './Components/Pages/WorkoutPages/CreateExercise';
import AdminUsers from './Components/Pages/Userpages/AdminUsers';
import PrivateRoute from './Components/Routes/PrivateRoute';
import AdminRoute from './Components/Routes/AdminRoute';
import { useError } from './Contexts/ErrorContext';
import { useUser } from './Contexts//UserContext';


function App() {
  const {currentUser} = useUser();
  const { error } = useError();
  return (
    <>
    <MainNav/>
    <div id="main-content" className={currentUser ? "loged-in" : ""}>
      { error.message !== '' &&  
        <Error/>
      } 
      
      <Switch>
        <AdminRoute path="/admin/users" exact component={AdminUsers} />
        <PrivateRoute path="/create-exercise" extact component={CreateExercise}/>
        <PrivateRoute path="/create-workout" extact component={CreateWorkout}/>
        <PrivateRoute path="/new-entry" extact component={NewEntry}/>
        <PrivateRoute path="/choose-workout" exact component={ChooseWorkout}/>
        <PrivateRoute path="/add-content" extact component={AddContent}/>
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
