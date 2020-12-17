import React, {useState} from 'react';
import getTraveler from './utils/getTraveler';


const TableTravels = ({travelsList, usersList}) => {
    return (
        <div className="travels row">
            <div className="divider"><p></p></div>
            <div className="divider"></div>
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
                {
                    travelsList.map(travel => {
                        console.log("Current Travel: ", travel);
                        const userInfos = getTraveler(travel.userId, usersList);
                        console.log("userInfos ==> ", userInfos);
                        const keyString = `${travel.userId}${travel.from}${travel.to}`
                        if (userInfos)
                            return (
                                <tr key = {travel._id}>
                                    <td>
                                        {userInfos.firstName}
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
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    )  
};

export default TableTravels