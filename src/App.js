import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import OtherAuth from './Components/OtherAuth/OtherAuth';
import Booking from './Components/Booking/Booking';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Hotel from './Components/Hotel/Hotel';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    ConfirmPassword: "",
    photoURL: "",
    error: "",
    success: false,
    LoggedInUser: true,
    newUser: false
})
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/home">
          <Header/>
          </Route>
          <Route exact path="/">
          <Header/>
          </Route>
          <Route path="/login">
          <OtherAuth/>
          </Route>
          <Route path="/booking">
          <Booking/>
          </Route>
          <PrivateRoute path="/hotel">
            <Hotel/>
          </PrivateRoute>
        </Switch>
      </Router>
      
    </userContext.Provider>
  );
}

export default App;
