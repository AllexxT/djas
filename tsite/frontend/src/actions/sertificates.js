import { GET_SERTIFICATES } from './types'
import axios from 'axios'


export const getSertificates = () => dispatch => {
    axios.get('api/sertificat/')
        .then(res => {
            dispatch({
                type: GET_SERTIFICATES,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}