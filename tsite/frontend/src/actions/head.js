import { GET_HEAD } from './types'
import axios from 'axios'


export const getHead = (page) => dispatch => {
    axios.get(`/api/page/${page}/`)
        .then(res => {
            dispatch({
                type: GET_HEAD,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}
