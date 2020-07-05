import React, { useState } from 'react';


const handleConnexion = (e, email, password) => {
    e.preventDefault();
    console.log('[in Signin] ', email, 'pass:', password) 
}

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container Form signin">
            <form onSubmit = {(e) => handleConnexion(e, email, password)}>
                <div className="row">
                    <div className="col input-field">
                        <i className="material-icons prefix">mail_outline</i>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="id or mail" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field">
                            <i className="material-icons prefix">lock_outline</i>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="mot de passe" required/>
                    </div>
                </div>
                <div className="center row">
                        <button className="btn center indigo" type="submit">Connexion</button>
                </div>
            </form>
        </div>
    )
}

export default Signin;