import {
    FETCH_TRAVELS_BEGIN,
    FETCH_TRAVELS_SUCCESS,
    FETCH_TRAVELS_FAILURE
} from '../actions/travels_action';

const initialState = {
    travelsList: [],
    loading: false,
    error: null
}

const travelsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_TRAVELS_BEGIN: 
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case FETCH_TRAVELS_SUCCESS:
            return {
                ...state,
                loading: false,
                travelsList: action.payload,
            }
        
        case FETCH_TRAVELS_FAILURE:
            return {
                ...state,
                loading: false,
                travelsList: [],
                error: action.payload
            }

        default: return state
    }
}

export default travelsReducer;