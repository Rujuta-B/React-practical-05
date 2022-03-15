import {createStore} from 'redux'
import userReducer from '../Redux/userReducer'

const store = createStore(userReducer)

export default store

