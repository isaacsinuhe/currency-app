declare interface AppProps {}
declare interface AppState {}

declare namespace Transactions {
    type initialState = {}
}

declare namespace CurrencyConverter {
    interface props {}
    interface state {
        currencyFrom: currencyFrom
        currencyTo: currencyTo
        quantity: number
        result: number
    }
    interface currency {
        currencyCode: string,
        currentRateValue: number,
        currencySymbol: string
    }
    type currencyMock = Array<currency>
    type currencyFrom = currency | undefined
    type currencyTo = currency | undefined
}