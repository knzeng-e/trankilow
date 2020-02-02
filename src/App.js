import './App.css';
import M from 'materialize-css';
import Home from './components/Home';
import React, { Component } from 'react';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Footer from './components/Footer';
import Voyages from './components/Voyages';
import SideMenu from './components/SideMenu';
import AddTravel from './components/AddTravel';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

 class App extends Component {

  componentDidMount = () => {
    const options = {
      responsiveThreshold: 0,
    }
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, options);
    });
  }
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
                              <a className="" href="/"> Accueil</a>
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
                        <a href="/newTravel">Proposez un trajet</a>
                          {/* <NavLink className = "" to="/newTravel">Proposez un trajet</NavLink> */}
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
              <Route path = '/newTravel' component = {AddTravel}/>
              <Route path = '/menu' component = {SideMenu}/>
              <Route path = '/profile/:userId' component = {UserDetails}/>
            </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
  
}

export default App;
