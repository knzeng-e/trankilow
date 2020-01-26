import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className = "navbar teal darken-4">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                            <NavLink className="" to="/"> Accueil</NavLink>
                    </li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
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