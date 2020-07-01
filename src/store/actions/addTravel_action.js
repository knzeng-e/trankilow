// const add_travel = (newTravel) => {
//     return ({
//         type: 'ADD_TRAVEL',
//         payload: newTravel
//     })
// }





import axios from 'axios';

export const addTravel = (newTravel) => {
    return (dispatch, getState) => {
        dispatch(addTravelBegin());
        axios.post("http://localhost:5000/travels/add", newTravel)
            .then(travel => {
                console.log('Travel added.. => ', travel);
                dispatch(addTravelSuccess(travel.data));
                return travel;
            })
            .catch(error => {
                dispatch(addTravelFailure(error));
            })
    }
}

export const ADD_TRAVEL_BEGIN = 'ADD_TRAVEL_BEGIN';
export const ADD_TRAVEL_FAILURE = 'ADD_TRAVEL_FAILURE';
export const ADD_TRAVEL_SUCCESS = 'ADD_TRAVELSSUCCESS';

export const addTravelBegin = () => {
    return {
        type: ADD_TRAVEL_BEGIN
    }
};

export const addTravelSuccess = (travel) => {
    return {
        type: ADD_TRAVEL_SUCCESS,
        payload: {travel}
    }
}

export const addTravelFailure = (failure) => {
    return {
        type: ADD_TRAVEL_FAILURE,
        payload: {failure}
    }
}

export default addTravel;