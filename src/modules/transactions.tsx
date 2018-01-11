import * as moment from 'moment'
import { handleActions, Action } from 'redux-actions';
const ADD_TRANSACTION = 'transactions/ADD_TRANSACTION'
const HYDRATE_TRANSACTIONS = 'transactions/HYDRATE_TRANSACTIONS'

const initialState: CurrencyApp.StoreTransaction<moment.Moment> = { 
    all: [],
}

type Actions = Action<{ 
    transaction: Transactions.Transaction<moment.Moment>,
    transactions: Transactions.Transaction<moment.Moment>[] 
}> 

export const addTransactionAction = (transaction: Transactions.Transaction<moment.Moment>) => ({
    type: ADD_TRANSACTION,
    payload: { transaction }
})

export const hydrateTransactionsAction = (transactions: Transactions.Transaction<moment.Moment>[]) => ({
    type: HYDRATE_TRANSACTIONS,
    payload: { transactions }
})

export const reducer = handleActions(
    {
        [ADD_TRANSACTION]: (state, action: Actions) => {
            return {
                ...state,
                all: action.payload ? 
                    [...state.all, action.payload.transaction] : 
                    [...state.all]
            }
        },
        [HYDRATE_TRANSACTIONS]: (state, {payload}: Actions) => {
            if (!payload) { return {...state}} else {
                payload.transactions.map((transaction) => ({
                    ...transaction,
                    date: moment(transaction.date)
                }))
                return {
                    ...state,
                    all: payload.transactions ? 
                        [...payload.transactions] : 
                        [...state.all]
                }
            }
        }
    },
    initialState
)