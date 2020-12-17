import axios from 'axios';

export const fetchTravels = () => {
    return (dispatch, getState) => {
        dispatch(fetchTravelsBegin());
        axios.get("http://localhost:5000/travels")
            .then(travels => {
                console.log('Travels returned.. => ', travels);
                dispatch(fetchTravelsSuccess(travels.data));
                return travels;
            })
            .catch(error => {
                dispatch(fetchTravelsFailure(error));
            })
    }
}

export const FETCH_TRAVELS_BEGIN = 'FETCH_TRAVELS_BEGIN';
export const FETCH_TRAVELS_FAILURE = 'FETCH_TRAVELS_FAILURE';
export const FETCH_TRAVELS_SUCCESS = 'FETCH_TRAVELS_SUCCESS';

export const fetchTravelsBegin = () => {
    return {
        type: FETCH_TRAVELS_BEGIN
    }
};

export const fetchTravelsSuccess = (travels) => {
    return {
        type: FETCH_TRAVELS_SUCCESS,
        payload: {travels}
    }
}

export const fetchTravelsFailure = (failure) => {
    return {
        type: FETCH_TRAVELS_FAILURE,
        payload: {failure}
    }
}