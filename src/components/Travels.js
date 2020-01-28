import React from 'react';

const getTraveler = (travelerId, usersList) => {
    const currentUser = usersList.find(user => user.id === travelerId);
    if (currentUser == undefined)
        return null;
    return currentUser
}

const showtravels  = (props) => {
    return(
        <div className="travels">
            {props.travelsList.map(travel => {
                const userInfos = getTraveler(travel.userId, props.usersList);
                if (userInfos)
                    return ( 
                        <div key = {userInfos.id} className="row">
                            <div className="col s12 m6">
                                <div className="card">
                                    <div className="card-content">
                                        <span className="card-title">{userInfos.prenom}</span>
                                        <p>Voyageur: {userInfos.prenom} {userInfos.nom}</p>
                                        <p>Depart: {travel.from}</p>
                                        <p>Arrivée: {travel.to}</p>
                                        <p>Date: {travel.date}</p>
                                        <p>Capacité disponible: {travel.capacity} Kg</p>
                                        <p>Adresse: {userInfos.adresse}</p>
                                        <p>Tel: {userInfos.tel}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            })}
        </div>
    )

}

export default showtravels;