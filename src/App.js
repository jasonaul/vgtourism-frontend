import React, { useState, useCallback } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'


import UsersPage from './user/pages/Users'
import Login from './user/pages/Login'
import Register from './user/pages/Register'
import UserDestinations from './destinations/pages/UserDestinations'
import NewDestination from './destinations/pages/NewDestination'
// import { LoggedIn } from './shared/context.js/loggedIn'
import Navbar from './shared/components/Navigation/Navbar'
import NavbarTrue from './shared/components/Navigation/NavbarTrue'
import { SingleDestinationDisplay } from './destinations/pages/UserDestinations'
import UpdateDestination from './destinations/pages/UpdateDestination'

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);

  // const login = useCallback(() => {
  //   setLoggedIn(true)
  // }, [])

  // const logout = useCallback(() => {
  //   setLoggedIn(false)
  // }, [])

  return (
    // <LoggedIn.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
  <Router>

  <NavbarTrue />
<main>
<Switch>

    <Route path="/users" exact>
      <UsersPage />
    </Route>

    <Route path="/destinations/:destID" exact>
      <SingleDestinationDisplay />
    </Route>

    <Route path="/:userID/destinations" exact>
      <UserDestinations />
    </Route>

    <Route path="/new" exact>
      <NewDestination />
    </Route>

    <Route path="/destinations/:destID/edit" exact>
      <UpdateDestination />
    </Route>

    <Route path="/login" exact>
      <Login />
    </Route>

    <Route path="/register" exact>
      <Register />
    </Route>

    <Redirect to="/" /> {/* If no route is hit, it will automatically redirect home. Change this path later if you want it to redirect to a "Not Found" style page*/}

</Switch>
</main>
  </Router>
  // </loggedIn.Provider>
)}

export default App