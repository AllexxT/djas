import { combineReducers } from 'redux'
import productsReducer from './products'
import productReducer from './product'
import newsReducer from './news'
import expositionReducer from './exposition'
import authReducer from './auth'
import errorsReducer from './errors'
import messagesReducer from './messages'
import servicesReducer from './services'
import sertificateReducer from './sertificates'
import headReducer from './head'

export default combineReducers({
    productsReducer,
    productReducer,
    newsReducer,
    expositionReducer,
    authReducer,
    errorsReducer,
    messagesReducer,
    servicesReducer,
    sertificateReducer,
    headReducer
})