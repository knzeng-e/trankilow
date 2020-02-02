import React from 'react';

const Signup = () =>  {
    return (
        <div className="Search signup">
            <form>
                <div className="row">
                    <div className="col input-field">
                        <input type="text" placeholder="Nom"/>
                    </div>
                    <div className="col input-field">
                        <input type="text" placeholder="Prénom"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col input-field">
                        <input type="text" placeholder="Adresse"/>
                    </div>
                    <div className="col input-field">
                        <input type="text" placeholder="telephone"/>
                    </div>
                </div>
                <div className="center row">
                    <button className="btn center indigo" type="submit">Enregistrer</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;