import { GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from '../actions/types'

const initialState = {
    product: {},
    fetching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.payload,
                fetching: false
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                product: action.payload,
                fetching: 404
            };
        default:
            return state;
    }
}