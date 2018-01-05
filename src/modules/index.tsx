import { combineReducers } from 'redux'
import { reducer as transactions } from './transactions'

export const reducers = combineReducers({
    transactions
    // more reducers go here
})