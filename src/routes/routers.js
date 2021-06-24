import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PhoneVerification from '../screens/otp-screen'
import UserRegistration from '../screens/registration'
import UserLogin from '../screens/login'


export default function Routes() {
    return (
      <Router>
        <div>

  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/signup">
              <UserRegistration />
            </Route>
            <Route path="/signin">
              <UserLogin />
            </Route>
            <Route path="/">
              <PhoneVerification />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }