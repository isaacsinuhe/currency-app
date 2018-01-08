declare namespace App {
    interface props {}
    interface state {}
}

declare namespace NavBar {
    interface props {}
    interface state { open: boolean }
}

declare namespace Transactions {
    export interface props {}
    interface state <DATE> {
        transactionsList: Array<transaction<DATE>>
    }
    export interface transaction <DATE> {
        date: DATE
        concept: string
        ammount: number 
        type: 'purchase' | 'transfer' | 'refund'
    }
    interface addTransaction {
        (transaction: Transactions.transaction<any>): void
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
        dataList: Array<Transactions.transaction<string>>
    }
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
    type currencyFrom = currency
    type currencyTo = currency
}