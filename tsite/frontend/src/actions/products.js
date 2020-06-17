import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from './types'
import axios from 'axios'


export const getProducts = (page) => dispatch => {
    dispatch({
        type: GET_PRODUCTS_REQUEST,
    })
    axios.get(`/api/products/?page=${page}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => console.log(err))
}