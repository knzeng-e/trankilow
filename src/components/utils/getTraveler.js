import React from 'react'

const getTraveler = (travelerId, usersList) => {
    console.log("In getTraveler: usersList ==> ", usersList)
    console.log("In getTraveler: travelerId ==> ", travelerId)
    if (usersList === undefined)
        return null
    const currentUser = usersList.find(user => user._id === travelerId);
    if (currentUser === undefined)
        return null;
        console.log("FOUND USER ==> ", currentUser)
    return currentUser
}

export default getTraveler;