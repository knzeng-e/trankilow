import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import TravelDetails from './TravelDetails';


const CardTravel = ({ travel, userInfos }) => {
    console.log("traveler ==> ", userInfos)
    console.log("Travel ==> ", travel)
    return (
        <div className='collection'>
            <Link to={`/trajet/${travel._id}`} travelId='testContent'>
                <ul>
                    <li className='collection-item avatar'>
                        {/* <img src="" alt='' className='circle' /> */}
                        <i className="material-icons circle">person</i>
                        <span>{userInfos.firstName} {userInfos.lastName}</span>
                        <p>{travel.from} - {travel.to}</p>
                        {travel.capacity} Kg
                    </li>
                </ul>
            </Link>

        </div>
    )
}

export default CardTravel;