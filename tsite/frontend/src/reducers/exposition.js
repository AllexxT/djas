import { GET_EXPOSITION_REQUEST, GET_EXPOSITION_SUCCESS, GET_EXPOSITION_FAIL } from '../actions/types'


const initialState = {
    exposition: [],
    fetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPOSITION_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_EXPOSITION_SUCCESS:
            return {
                ...state,
                exposition: action.payload,
                fetching: false
            };
        case GET_EXPOSITION_FAIL:
            return {
                ...state,
                exposition: action.payload,
                fetching: 404
            };
        default:
            return state;
    }
}