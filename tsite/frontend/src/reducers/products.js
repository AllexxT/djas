import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from '../actions/types'

const initialState = {
    products: [],
    fetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                fetching: false
            };
        default:
            return state;
    }
}