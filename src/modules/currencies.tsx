import { handleActions, Action } from 'redux-actions'

const SAVE_CURRENCY_FROM = 'currency/SAVE_CURRENCY_FROM'
const SAVE_CURRENCY_TO = 'currency/SAVE_CURRENCY_TO'
const QUANTITY_CHANGE = 'currency/QUANTITY_CHANGE'
const HYDRATE_CURRENCIES = 'currency/HYDRATE_CURRENCIES'
const SAVE_RESULT = 'currency/SAVE_RESULT'

const initialState: CurrencyApp.StoreCurrency = {
    all: [],
    quantity: 1,
    currencyFrom: undefined,
    currencyTo: undefined,
    result: 1
}

type Actions = Action<{
    currencies: CurrencyConverter.currency[]
    quantity: number
    result: number
    currencyFrom: CurrencyConverter.currency,
    currencyTo: CurrencyConverter.currency,
}>

export const quantityChangeAction = (quantity: number) => ({
    type: QUANTITY_CHANGE,
    payload: { quantity }
})
export const saveResultAction = (result: number) => ({
    type: SAVE_RESULT,
    payload: { result }
})
export const saveCurrencyFromAction = (currencyFrom: CurrencyConverter.currency) => ({
    type: SAVE_CURRENCY_FROM,
    payload: { currencyFrom }
})
export const saveCurrencyToAction = (currencyTo: CurrencyConverter.currency) => ({
    type: SAVE_CURRENCY_TO,
    payload: { currencyTo }
})

export const hydrateCurrenciesAction = (currencies: CurrencyConverter.currency[]) => {
    return (
        {
            type: HYDRATE_CURRENCIES,
            payload: { currencies }
        }
    )
}

export const reducer = handleActions(
    {
        [HYDRATE_CURRENCIES]: (state, {payload}: Actions) => {
            const baseCurrency = payload ? 
                payload.currencies.find(currency => currency.currencyCode === 'USD' ) :
                undefined

            return {
                ...state,
                all: payload ?
                    [...payload.currencies] :
                    [...state.all],
                currencyFrom: baseCurrency,
                currencyTo: baseCurrency,
            }
        },
        [QUANTITY_CHANGE]: (state, action: Actions) => {
            return {
                ...state,
                quantity: action.payload ? action.payload.quantity : state.quantity
            }
        },
        [SAVE_RESULT]: (state, action: Actions) => {
            return {
                ...state,
                result: action.payload ? action.payload.result : state.result
            }
        },
        [SAVE_CURRENCY_FROM]: (state, action: Actions) => {
            return {
                ...state,
                currencyFrom: action.payload ? action.payload.currencyFrom : state.currencyFrom
            }
        },
        [SAVE_CURRENCY_TO]: (state, action: Actions) => {
            return {
                ...state,
                currencyTo: action.payload ? action.payload.currencyTo : state.currencyTo
            }
        },
    },
    initialState
)