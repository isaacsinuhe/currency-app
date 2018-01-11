import * as React from 'react';
import './index.css';
import TransactionInput from '../TransactionInput';
import TransactionTable from '../TransactionTable';
import * as moment from 'moment'
import { connect } from 'react-redux';
import axios from 'axios'
import { hydrateTransactionsAction, addTransactionAction } from '../../modules/transactions';
import { Moment } from 'moment';

export class Transactions extends React.Component <Transactions.props<Moment>> {

    async componentWillMount () {
        const {data} = await axios.get('/transactions/')
        this.props.hydrateTransactions(data)
    }

    addTransaction: Transactions.addTransaction = async (transaction) => {
        transaction = { ...transaction, date: moment(transaction.date)}
        await axios.post('/transactions', transaction)
        this.props.addTransaction(transaction)
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
                    dataList={this.props.transactionsList
                        .map((transaction) => (
                            {
                                ...transaction,
                                type: transaction.type,
                                date: moment(transaction.date).format('MMM-DD-YYYY')
                            }
                        )
                    )}
                />
            </div>
        );
    }
}

export default connect <
Transactions.stateToProps<moment.Moment>, 
Transactions.dispatchToProps<moment.Moment>, 
Transactions.ownProps, CurrencyApp.Store>(

    ({ transactions }) => ({
        transactionsList: transactions.all.map(({ ammount, type, concept, date}) => ({
                date,
                type,
                concept, 
                ammount,
            }))
    }),
    { 
        hydrateTransactions: hydrateTransactionsAction,
        addTransaction: addTransactionAction
    })
    (Transactions)