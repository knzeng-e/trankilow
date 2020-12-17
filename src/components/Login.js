import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ethereumAccount = (account) => {
    const etherscanSearch = "https://etherscan.io/address/" + account
    const accountAddress = account.toString()
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><i className="material-icons">account_circle</i></li>
                <li>
                    <div>
                        <a href={etherscanSearch} target="blank">{accountAddress.substring(0, 21) + '...'}</a>
                    </div>
                </li>
                <li>
                    <a href="/newTravel">Proposez un trajet</a>
                </li>
            </ul>
        </div>
    )
}

const userAccount = async () => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><i className="material-icons">account_circle</i></li>
                <li>
                    <div>
                        User name
                    </div>
                </li>
                <li>
                    <a href="/newTravel">Proposez un trajet</a>
                </li>
            </ul>
        </div>
    )

}

const SignedInLinks = (account, isConnected) =>  {
    if (account !== null)
        return ethereumAccount(account)
    if (isConnected){
        return userAccount();
    }
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
    const [isConnected, setIsConnected] = useState(false)

    console.log("[in Login] ACCOUNTS ==> ", accounts)

    return ( accounts !== null || isConnected ? 
        (SignedInLinks(accounts, isConnected)): 
         (SignedOutLinks(accounts))
        )
}

export default Login;