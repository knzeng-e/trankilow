import React from 'react';

const showUsers = (props) => {

    return (
        <div>
            {props.usersList.map(user => {
                return (
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">{user.nom}</span>
                                    <p>Nom: {user.nom}</p>
                                    <p>Prénom: {user.prenom}</p>
                                    <p>Adresse: {user.adresse}</p>
                                    <p>Tel: {user.tel}</p>
                                </div>

                            </div>

                        </div>

                    </div>)
            })}
        </div>
    )
}

export default showUsers;