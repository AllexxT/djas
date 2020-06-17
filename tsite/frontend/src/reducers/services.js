import {
    GET_SERVICES_PAGE,
    GET_SERVICES_PAGE_SUCCESS,
    GET_SERVICES_PAGE_FAIL
} from '../actions/types'


const initialState = {
    servicesPage: [],
    fetching: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES_PAGE:
            return {
                ...state,
                fetching: true
            }
        case GET_SERVICES_PAGE_SUCCESS:
            return {
                ...state,
                servicesPage: action.payload,
                fetching: false
            };
        case GET_SERVICES_PAGE_FAIL:
            return {
                ...state,
                servicesPage: action.payload,
                fetching: 404
            };
        default:
            return state;
    }
}