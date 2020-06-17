import {
    GET_SERVICES_PAGE,
    GET_SERVICES_PAGE_SUCCESS,
    GET_SERVICES_PAGE_FAIL
} from './types'
import axios from 'axios'

export const getServices = (page) => dispatch => {
    dispatch({
        type: GET_SERVICES_PAGE,
    })
    axios.get(`/api/serviceprices/?page=${page}`)
        .then(res => {
            dispatch({
                type: GET_SERVICES_PAGE_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_SERVICES_PAGE_FAIL,
                payload: err
            })
        })
}