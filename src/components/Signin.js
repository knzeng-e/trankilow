import React from 'react';

const Signin = () => {
    return (
        <div className=" Search signin">
            <form>
                <div className="row">
                    <div className="col input-field">
                        <i className="material-icons prefix">mail_outline</i>
                        <input type="email" placeholder="id or mail"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field">
                            <i className="material-icons prefix">lock_outline</i>
                            <input type="password" placeholder="mot de passe"/>
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