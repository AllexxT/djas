import { GET_SERTIFICATES} from '../actions/types'

const initialState = {
    sertificates: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SERTIFICATES:
            return {
                ...state,
                sertificates: action.payload
            };
        default:
            return state;
    }
}