import { combineReducers } from 'redux'
import artwork from './artwork'
import coding from './coding'

const rootReducer = combineReducers({ artwork, coding })

export default rootReducer
