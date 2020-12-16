import React from 'react'
import CardTravel from './CardTravel'
import TableTravels from './TableTravels'
import getTraveler from './utils/getTraveler';

// const getTraveler = (travelerId, usersList) => {
//     console.log("In getTraveler: usersList ==> ", usersList)
//     console.log("In getTraveler: travelerId ==> ", travelerId)
//     if (usersList === undefined)
//         return null
//     const currentUser = usersList.find(user => user._id === travelerId);
//     if (currentUser === undefined)
//         return null;
//     return currentUser
// }

const showtravels  = (props) => {

    let format = props.format;

    if (format === "table")
        return <TableTravels travelsList = {props.travelsList} usersList={props.usersList}/>
    else 
        return (
            props.travelsList.map(travel => {
                console.log("Current Travel: ", travel);
                const userInfos = getTraveler(travel.userId, props.usersList);
                const keyString = `${travel.userId}${travel.from}${travel.to}`
                if (userInfos){
                    return (
                        <div className="travels row">
                            <div className="divider"><p></p></div>
                            <div className="divider"></div>
                            <div className="divider"></div>
                            <div className="divider"></div> 
                            {/* Card presentation */}
                            {
                                format === "card" && <CardTravel travel={travel} userInfos={userInfos}/>
                            }
                            {/* Table presentation */}
                        </div>     
                    )
                }
                return null;
            })
        )
}

export default showtravels;