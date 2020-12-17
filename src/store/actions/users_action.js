import axios from 'axios';

export const fetchUsers = () => {
    return (dispatch, getState) => {
        dispatch(fetchUsersBegin());
        axios.get("http://localhost:5000/users")
            .then(users => {
                console.log('users returned.. => ', users.data);
                dispatch(fetchUsersSuccess(users.data));
                return users;
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error));
            })
    }
}

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const fetchUsersBegin = () => {
    return {
        type: FETCH_USERS_BEGIN
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: {users}
    }
}

export const fetchUsersFailure = (failure) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: {failure}
    }
}