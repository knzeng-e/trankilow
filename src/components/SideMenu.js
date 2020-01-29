import Voyages from './Voyages';
import M from 'materialize-css';
import React, { Component } from 'react';
import { Switch, BrowserRouter, NavLink} from 'react-router-dom';

class sidePanel extends Component {
    componentDidMount = () => {
        const options = {
            edge: 'left',
        }
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            this.instances = M.Sidenav.init(elems, options);
          });

    }
    render = () => {
        return (
            <div className="">
                <ul id="slide-out" className="sidenav">
                    <li>
                        <NavLink className="" to="/"> Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className="" to="/travels"> Derniers voyages</NavLink>
                    </li>
                      <li>
                          <NavLink className = "" to="/trajet">Proposez un trajet</NavLink>
                      </li>
                    <li>
                          <NavLink className = "" to="/signup">Créez votre compte</NavLink>
                      </li>
                      <li>
                          <NavLink className = "" to="/signin">Connexion</NavLink>
                      </li>
                </ul>
                <div data-target="slide-out" className="sidenav-trigger">
                    <NavLink to="#">
                        <i className="large material-icons">menu</i> 
                    </NavLink>
                </div>
        </div>)
    }
}

export default sidePanel;