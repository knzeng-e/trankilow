import React from 'react';
import Login from './Login';
import SideMenu from './SideMenu';

const Navbar = (props) => {
    return (
        <div>
            <nav className = "navBar">
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                      <li>
                        <a className="" href="/"> Accueil</a>
                      </li>
                    </ul>
                    <ul className="hide-on-large-only">
                      <li>
                          <SideMenu/>
                      </li>
                    </ul>
                </div>
                <div className="appName">Trankilow</div>
                <div>
                    <Login accounts = {props.accounts} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;