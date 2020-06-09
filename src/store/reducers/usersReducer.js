import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from '../actions/users_action';

const initialState = {
    usersList: [],
    loading: false,
    error: null
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                usersList: action.payload,
            }
        
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                usersList: [],
                error: action.payload
            }

        default: return state
    }
}

export default usersReducer;