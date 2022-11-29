import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

import Home from './destinations/pages/Home'
import UsersPage from './user/pages/Users'
// import AllDestinations from './destinations/pages/AllDestinations'
// import Login from './user/pages/Login'
// import Register from './user/pages/Register'
import Authentify from './user/pages/Authentify'
import UserDestinations from './destinations/pages/UserDestinations'
import NewDestination from './destinations/pages/NewDestination'
// import { LoggedIn } from './shared/context.js/loggedIn'
import Navbar from './shared/components/Navigation/Navbar'
import NavbarTrue from './shared/components/Navigation/NavbarTrue'
// import { SingleDestinationDisplay } from './destinations/pages/UserDestinations'
import UpdateDestination from './destinations/pages/UpdateDestination'
import OneDest from './destinations/pages/OneDest'
import { useAuthentify } from './shared/hooks/authentication'
import { LoggedIn } from './shared/context/loggedIn'

const App = () => {
  // const [token, setToken] = useState(false);
  // const [userID, setUserID] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {token, login, logout, userID} = useAuthentify();



  // const login = useCallback((userID, token) => {
  //   setToken(token)
  //   isLoggedIn(true)
  //   localStorage.setItem('userData', JSON.stringify({
  //     userID: userID,
  //     token: token
  //   }))
  //   setUserID(userID)

  // }, []);

  // const logout = useCallback(() => {
  //   setToken(false)
  //   setUserID(null)
  //   isLoggedIn(false)
  //   localStorage.removeItem('userData')
  // }, []);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem('userData'));
  //   if (storedData && storedData.token) {
  //     login(storedData.userID, storedData.token);
  //   }
  // }, [login])

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/new" exact>
          <NewDestination />
        </Route>

        <Route path="/destinations/:destID/edit" exact>
          <UpdateDestination />
        </Route>

        <Route path="/users" exact>
          <UsersPage />
        </Route>
 
        <Route path="/destinations/:destID" exact>
          <OneDest />
        </Route>
 
        <Route path="/:userID/destinations" exact>
          <UserDestinations />
        </Route>

        <Route path="/login" exact>
          <Authentify />
        </Route>

      <Route path="/register" exact>
        <Authentify />
      </Route>

      <Route path="/">
        <Home />
      </Route>

      </Switch>
    )
  } else if (token || !token) {
      routes = (
        <Switch>

        <Route path="/users" exact>
          <UsersPage />
        </Route>
 
        <Route path="/destinations/:destID" exact>
          <OneDest />
        </Route>
 
        <Route path="/:userID/destinations" exact>
          <UserDestinations />
        </Route>

        <Route path="/login" exact>
          <Authentify />
        </Route>

      <Route path="/register" exact>
        <Authentify />
      </Route>

      <Route path="/">
        <Home />
      </Route>

        </Switch>
      )

  } 

return (
  <LoggedIn.Provider
    value={{
      isLoggedIn: !!token,
      token: token,
      userID: userID,
      login: login,
      logout: logout
    }}
    >
  <Router>
    <NavbarTrue />
      <main>{routes}</main>
  </Router>

    </LoggedIn.Provider>
)

}

export default App

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const login = useCallback(() => {
//     setIsLoggedIn(true)
//   }, [])

//   const logout = useCallback(() => {
//     setIsLoggedIn(false)
//   }, [])

//   return (
//     // <LoggedIn.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
//  <>
//     <LoggedIn.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         login: login,
//         logout: logout
//       }}
//     >
//  <Router>

//   <NavbarTrue />
// <main>
// <Switch>

//     <Route path="/" exact>
//       <Home />
//     </Route>

//     <Route path="/users" exact>
//       <UsersPage />
//     </Route>

//     <Route path="/destinations/:destID" exact>
//       <OneDest />
//     </Route>

//     <Route path="/:userID/destinations" exact>
//       <UserDestinations />
//     </Route>

//     <Route path="/new" exact>
//       <NewDestination />
//     </Route>

//     <Route path="/destinations/:destID/edit" exact>
//       <UpdateDestination />
//     </Route>

//     <Route path="/login" exact>
//       <Login />
//     </Route>

//     <Route path="/register" exact>
//       <Register />
//     </Route>

//     <Redirect to="/" /> {/* If no route is hit, it will automatically redirect home. Change this path later if you want it to redirect to a "Not Found" style page*/}

// </Switch>
// </main>
//   </Router>
//  </LoggedIn.Provider></>
// )}

// export default App