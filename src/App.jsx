import React from 'react'
import { Switch, Route as PublicRoute } from "react-router-dom";

import { useError } from './Contexts/ErrorContext';
import { useUser } from './Contexts/UserContext';

import PrivateRoute from './Components/Routes/PrivateRoute';
import AdminRoute from './Components/Routes/AdminRoute';

import Error from './Components/PageComponents/Error/Error';
import MainNav from './Components/Navigation/MainNav';
import FooterNav from './Components/Navigation/FooterNav';

import Home from './Components/Pages/GereralPages/Home';
import FourOhFour from './Components/Pages/GereralPages/FourOhFour';
import LoginPage from './Components/Pages/Userpages/LoginPage';
import RegisterPage from './Components/Pages/Userpages/Registerpage';
import ProfilePage from './Components/Pages/Userpages/ProfilePage';
import MyGoals from './Components/Pages/Userpages/MyGoals';
import AddContent from './Components/Pages/WorkoutPages/AddContent';
import NewEntry from './Components/Pages/WorkoutPages/NewEntry';
import CreateWorkout from './Components/Pages/WorkoutPages/CreateWorkout';
import CreateExercise from './Components/Pages/WorkoutPages/CreateExercise';
import AdminUsers from './Components/Pages/Userpages/AdminUsers';
import NoAcces from './Components/Pages/GereralPages/NoAcces';
import Succespage from './Components/Pages/WorkoutPages/Succespage';
import Workouts from './Components/Pages/WorkoutPages/Workouts';
import WorkoutDetail from './Components/Pages/WorkoutPages/[workoutDetail]';
import AllEntries from './Components/Pages/Userpages/AllEntries';
import Presentation from './Components/Pages/GereralPages/Presentation';
import SceduleWorkout from './Components/Pages/WorkoutPages/SceduleWorkout';
import PlannedWorkouts from './Components/Pages/Userpages/PlannedWorkouts';


function App() {
  const { currentUser } = useUser();
  const { error } = useError();
  return (
    <>
      <MainNav />
      <div id="main-content" className={currentUser ? "loged-in" : ""}>
        {error.message !== '' &&
          <Error />
        }

        <Switch>
          <AdminRoute exact path="/admin/users" component={AdminUsers} />
          <PrivateRoute exact path="/your-scedule" component={PlannedWorkouts} />
          <PrivateRoute exact path="/scedule-workout" component={SceduleWorkout} />
          <PrivateRoute exact path="/create-exercise" component={CreateExercise} />
          <PrivateRoute exact path="/create-workout" component={CreateWorkout} />
          <PrivateRoute exact path="/new-entry" component={NewEntry} />
          <PrivateRoute exact path="/add-content" component={AddContent} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/my-goals" component={MyGoals} />
          <PrivateRoute exact path="/succes" component={Succespage} />
          <PrivateRoute exact path="/all-entries" component={AllEntries} />
          <PublicRoute exact path="/presentation" component={Presentation} />
          <PublicRoute exact path="/register" component={RegisterPage} />
          <PublicRoute exact path="/workouts" component={Workouts} />
          <PublicRoute exact path="/login" component={LoginPage} />
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/forbidden" component={NoAcces} />
          <PublicRoute path="/workouts/:workoutDetail" component={WorkoutDetail} />
          <PublicRoute path="*" component={FourOhFour} />
        </Switch>
      </div>
      {currentUser &&
        <FooterNav />
      }
    </>
  )
}

export default App
