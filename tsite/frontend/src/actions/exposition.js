import { GET_EXPOSITION_REQUEST, GET_EXPOSITION_SUCCESS, GET_EXPOSITION_FAIL } from '../actions/types'
import axios from 'axios'

export const getExposition = () => dispatch => {
    dispatch({
        type: GET_EXPOSITION_REQUEST,
    })
    axios.get(`/api/exposition/`)
        .then(res => {
            dispatch({
                type: GET_EXPOSITION_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_EXPOSITION_FAIL,
                payload: err
            })
        })
}