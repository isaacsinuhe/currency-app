import * as React from 'react';
import './index.css';
import TransactionInput from '../TransactionInput';
import TransactionTable from '../TransactionTable';

export default class Transactions extends React.Component {
    render() {
        return (
            <div className="Transactions">
                <TransactionInput/>
                <TransactionTable/>
            </div>
        );
    }
}
