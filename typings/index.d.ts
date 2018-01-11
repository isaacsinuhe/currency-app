declare namespace CurrencyApp  {
    interface Store {
        currencies: StoreCurrency
        transactions: StoreTransaction <any>
    }
    interface StoreTransaction <DATE> {
        all: Transactions.Transaction<DATE>[]
    }
    interface StoreCurrency {
        all: CurrencyConverter.currency[]
        quantity: number
        currencyFrom: CurrencyConverter.currency | undefined
        currencyTo: CurrencyConverter.currency | undefined
        result: number
    }
}

declare namespace App {
    interface props {}
    interface state {}
}

declare namespace NavBar {
    interface props {}
    interface state { open: boolean }
}

declare namespace Transactions {
    export interface props<T> extends stateToProps<T>, dispatchToProps<T>, ownProps {}
    interface stateToProps<T> { transactionsList: Transactions.Transaction<T>[] }
    interface dispatchToProps<T> {
        hydrateTransactions: (transactions: Transactions.Transaction<T>[]) => {},
        addTransaction: (transaction: Transactions.Transaction<T>) => {}
    }
    type ownProps = {}

    type state<T> = { 
        transactionsList: Array<Transaction<T>>
    }

    export interface Transaction <DATE> {
        date: DATE
        concept: string
        ammount: number 
        type: 'purchase' | 'transfer' | 'refund'
    }
    interface addTransaction {
        (transaction: Transactions.Transaction<any>): void
    }
}

declare namespace TransactionInput {
    interface props {
        title: string
        add: Transactions.addTransaction
    }
    interface state {

    }
    interface FormValue {
        name: string,
        value: string | number
    }
}

declare namespace TransactionTable {
    interface props {
        footer: string
        header: string,
        dataList: Array<Transactions.Transaction<string>>
    }
}

declare namespace CurrencyConverter {    
    export interface props extends stateToProps, dispatchToProps, ownProps { }
    interface stateToProps { 
        currencyList: currency[]
        currencyFrom: currency | undefined
        currencyTo: currency | undefined
        quantity: number
        result: number
    }
    interface dispatchToProps {
        hydrateCurrencies: (currencies: currency[]) => {}
        quantityChange: (quantity: number) => {}
        saveResult: (result: number) => {}
        saveCurrencyFrom: (currency: currency) => {}
        saveCurrencyTo: (currency: currency) => {}
    }
    type ownProps = {}
    
    interface state {
        currencyFrom: currency
        currencyTo: currency
        quantity: number
        result: number
    }
    interface currency {
        currencyCode: string,
        currentRateValue: number,
        currencySymbol?: string
    }
}

