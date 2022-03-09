import React from 'react'
import { Switch, Route as PublicRoute } from "react-router-dom";

import { useError } from './Contexts/ErrorContext';
import { useUser } from './Contexts/UserContext';

import PrivateRoute from './Components/Routes/PrivateRoute';
import AdminRoute from './Components/Routes/AdminRoute';

import Error from './Components/PageComponents/Error/Error';
import MainNav from './Components/Navigation/MainNav';
import FooterNav from './Components/Navigation/FooterNav';

import FourOhFour from '@generalPage/FourOhFour';
import Home from '@generalPage/Home';
import NoAcces from '@generalPage/NoAcces';
import Presentation from '@generalPage/Presentation';

import AdminUsers from '@userPage/AdminUsers';
import AllEntries from '@userPage/AllEntries';
import CreateUser from '@userPage/CreateUser';
import LoginPage from '@userPage/LoginPage';
import MyGoals from '@userPage/MyGoals';
import ProfilePage from '@userPage/ProfilePage';

import AddContent from '@workoutPage/AddContent';
import CreateBooking from '@workoutPage/CreateBooking';
import CreateEntry from '@workoutPage/CreateEntry';
import CreateExercise from '@workoutPage/CreateExercise';
import CreateWorkout from '@workoutPage/CreateWorkout';
import UserWorkouts from '@workoutPage/UserWorkouts';
import Succespage from '@workoutPage/Succespage';
import Workouts from '@workoutPage/Workouts';
import WorkoutDetail from '@workoutPage/WorkoutDetail';

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

          {/* admin routes  */}
          <AdminRoute exact path="/admin/users" component={AdminUsers} />

          {/* privite routes  */}
          <PrivateRoute exact path="/add-content" component={AddContent} />
          <PrivateRoute exact path="/all-entries" component={AllEntries} />
          <PrivateRoute exact path="/create-exercise" component={CreateExercise} />
          <PrivateRoute exact path="/create-workout" component={CreateWorkout} />
          <PrivateRoute exact path="/my-goals" component={MyGoals} />
          <PrivateRoute exact path="/new-entry" component={CreateEntry} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <PrivateRoute exact path="/schedule-workout" component={CreateBooking} />
          <PrivateRoute exact path="/succes" component={Succespage} />
          <PrivateRoute exact path="/your-schedule" component={UserWorkouts} />

          {/* public routes  */}
          <PublicRoute exact path="/login" component={LoginPage} />
          <PublicRoute exact path="/presentation" component={Presentation} />
          <PublicRoute exact path="/register" component={CreateUser} />
          <PublicRoute exact path="/workouts" component={Workouts} />
          <PublicRoute path="/workouts/:id" component={WorkoutDetail} />

          {/* standard routes  */}
          <PublicRoute exact path="/forbidden" component={NoAcces} />
          <PublicRoute exact path="/" component={Home} />
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
