import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = account =>  {
    const etherscanSearch = "https://etherscan.io/address/" + account
    const userInfos = <i className="material-icons">account_circle</i>
        return (
            <div>
                <ul className="right hide-on-med-and-down">
                    <li>{userInfos}</li>
                    <li>
                        <div>
                            <a href={etherscanSearch} target="blank">{account}</a>
                        </div>
                    </li>
                    <li>
                        <a href="/newTravel">Proposez un trajet</a>
                    </li>
                </ul>
            </div>
        )
}

const SignedOutLinks = account => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li>
                    <NavLink className = "" to="/signin">Connexion</NavLink>
                </li>
                <li>
                    <NavLink className = "" to="/signup">Créez votre compte</NavLink>
                </li>
            </ul>
        </div>
    )
}

const Login = ({accounts}) => {
    //let accounts = props.accounts;

    console.log("ACCOUNTS ==> ", accounts)

    return ( accounts !== null ? 
        (SignedInLinks(accounts)): 
         (SignedOutLinks(accounts))
        )
}

export default Login;