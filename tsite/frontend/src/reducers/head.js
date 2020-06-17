import { GET_HEAD } from '../actions/types'

const initialState = {
    head: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_HEAD:
            return {
                ...state,
                head: action.payload
            };
        default:
            return state;
    }
}