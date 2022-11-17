import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'


import UsersPage from './user/pages/Users'
import UserDestinations from './destinations/pages/UserDestinations'
import NewDestination from './destinations/pages/NewDestination'
import Navbar from './shared/components/Navigation/Navbar'
import NavbarTrue from './shared/components/Navigation/NavbarTrue'
import { SingleDestinationDisplay } from './destinations/pages/UserDestinations'

function App() {
  return <Router>

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

    <Route path="/destinations/new" exact>
      <NewDestination />
    </Route>

    <Redirect to="/" /> {/* If no route is hit, it will automatically redirect home. Change this path later if you want it to redirect to a "Not Found" style page*/}

</Switch>
</main>
  </Router>
}

export default App