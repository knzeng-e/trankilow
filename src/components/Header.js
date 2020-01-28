import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className = "navbar teal darken-3">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                            <NavLink className="" to="/"> Accueil</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="right">
                        <NavLink className = "" to="/newUser">Créez votre compte</NavLink>
                    </li>
                </ul>
                <form>
                    <div className="input-field right">
                        <input id="search" type="search" required/>
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        
        </nav>
    )
}

export default Header;