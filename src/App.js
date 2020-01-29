import './App.css';
import React, { Component } from 'react';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';
import Voyages from './components/Voyages';
import SideMenu from './components/SideMenu';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

 class App extends Component {
   render(){
    return (
      <div className="App">
        <Router>
          <nav className = "indigo">
            <div className="brand-logo center">Trankilow</div>
              <div className="nav-wrapper">
                  <ul id="nav-mobile" className="left hide-on-med-and-down">
                  {/* <ul id="nav-mobile" className="left"> */}
                      <li>
                              <NavLink className="" to="/"> Accueil</NavLink>
                      </li>
                      <li>
                              <NavLink className="" to="/travels"> Derniers voyages</NavLink>
                      </li>
                  </ul>
                  <ul className="hide-on-large-only">
                    <li>
                         <SideMenu/>
                    </li>
                  </ul>
                  <ul className="right hide-on-med-and-down">
                      <li>
                          <NavLink className = "" to="/signup">Créez votre compte</NavLink>
                      </li>
                      <li>
                          <NavLink className = "" to="/signin">Connexion</NavLink>
                      </li>
                      <li>
                          <NavLink className = "" to="/trajet">Proposez un trajet</NavLink>
                      </li>
                  </ul>
                  
                  {/* <form>
                      <div className="input-field right">
                          <input id="search" type="search" required/>
                          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                          <i className="material-icons">close</i>
                      </div>
                  </form> */}
              </div>
          </nav>
        {/* <SideMenu /> */}
  
          <Switch>
              <Route exact path = '/' component = {Home}/>
              <Route exact path = '/signup' component = {SignUp}/>
              <Route exact path = '/signin' component = {SignIn}/>
              <Route path = '/travels' component = {Voyages}/>
              <Route path = '/menu' component = {SideMenu}/>
              <Route path = '/profile/:userId' component = {UserDetails}/>
            </Switch>
            <Footer />
        </Router>
      </div>
    );
  }
  
}

export default App;
