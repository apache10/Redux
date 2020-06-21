import { combineReducers } from 'redux'
import breadReducer from './bread/breadReducer'
import muffinReducer from './muffins/muffinReducer'
import userReducer from './user/userReducer'


const rootReducer = combineReducers({
    bread: breadReducer,
    muffin: muffinReducer,
    user: userReducer
})

export default rootReducer