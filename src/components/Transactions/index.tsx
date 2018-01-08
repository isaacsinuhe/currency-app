import * as React from 'react';
import './index.css';
import TransactionInput from '../TransactionInput';
import TransactionTable from '../TransactionTable';
import * as moment from 'moment'

moment()
export default class Transactions extends React.Component <Transactions.props, Transactions.state<moment.Moment>> {
    mockTransactions: Array<Transactions.transaction<moment.Moment>> = [
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'purchase',
            concept: 'Macys',
            ammount: 99.99
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'purchase',
            concept: 'Home Depot',
            ammount: 150.15
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'transfer',
            concept: 'Wells Fargo',
            ammount: 350
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'purchase',
            concept: 'Jamba Juice',
            ammount: 2.30
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'refund',
            concept: 'DSW shoes',
            ammount: 75.45
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'purchase',
            concept: 'DSW shoes',
            ammount: 75.45
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'purchase',
            concept: 'Jamba Juice',
            ammount: 3.00
        },
        {
            date: moment('01/10/2014', 'MM/DD/YYYY'),
            type: 'transfer',
            concept: 'Wells Fargo',
            ammount: 2.75
        },
    ]
    state = {
        transactionsList: this.mockTransactions
    }
    addTransaction: Transactions.addTransaction = (transaction) => {
        transaction = { ...transaction, date: moment(transaction.date)}
        this.setState( (prevState, props) => {
            return {
                transactionsList: [...prevState.transactionsList, transaction]
            }
        })
    }
    render() {
        return (
            <div className="Transactions">
                <TransactionInput 
                    title="New Transaction"
                    add={this.addTransaction}
                />
                <TransactionTable
                    header="Transactions Table"
                    footer="This is the table footer"
                    dataList={this.state.transactionsList.map(
                        (transaction) => (
                            {
                                ...transaction,
                                type: transaction.type,
                                date: transaction.date.format('MMM-DD-YYYY')
                            }
                        )
                    )
                }
                />
            </div>
        );
    }
}