
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import Blog from './components/Blog/Blog';
import Contuct from './components/Contuct/Contuct';
import Login from './components/Login/Login';
import { createContext,useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideDetails from './components/RideDetails/RideDetails';
import Desti from './components/Desti/Desti';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
          <Header/>
          <Switch>
          
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/destination">
              <Desti></Desti>
            </PrivateRoute>
            <PrivateRoute path="/rideDetails/:title">
              <RideDetails />
            </PrivateRoute>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contuct />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
