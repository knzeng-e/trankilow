import React from 'react';

const getTraveler = (travelerId, usersList) => {
    if (usersList === undefined)
        return null
    const currentUser = usersList.find(user => user.id === travelerId);
    if (currentUser === undefined)
        return null;
    return currentUser
}

const showtravels  = (props) => {
    return(
        <div className="travels row">
            <div className="divider"><p></p></div>
            <div className="divider">
            </div>
            <div className="divider"></div>
            <div className="divider"></div>
            <table className="responsive-table highlight striped centered z-depth-3">
                <thead>
                    <tr>
                        <th><i  className="material-icons">person</i></th>
                        <th><i className="material-icons">flight_takeoff</i></th>
                        <th><i className="material-icons">flight_land</i></th>
                        <th><i className="material-icons">date_range</i></th>
                        <th><i className="material-icons">fitness_center</i></th>
                    </tr>
                </thead>
                <tbody>
                {props.travelsList.map(travel => {
                    const userInfos = getTraveler(travel.userId, props.usersList);
                    const keyString = `${travel.userId}${travel.from}${travel.to}`
                    if (userInfos)
                        return ( 
                            <tr key = {keyString}>
                                <td>
                                    {userInfos.prenom}
                                </td>
                                <td>
                                    {travel.from}
                                </td>
                                <td>
                                    {travel.to}
                                </td>
                                <td>
                                    {travel.date}
                                </td>
                                <td>
                                    {travel.capacity} Kg
                                </td>
                            </tr>
                        )
            })}
                </tbody>

            </table>
        </div>
    )
}

export default showtravels;