import { combineReducers } from 'redux'
import { reducer as transactions } from './transactions'
import { reducer as currencies } from './currencies'

export const reducers = combineReducers({
    transactions,
    currencies
})