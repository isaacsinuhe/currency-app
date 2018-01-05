import * as React from 'react';
import './index.css';

export default class TransactionInput extends React.Component {
    render() {
        return (
            <div className="TransactionInput">
                Transaction Input
                <input type="text"/>
            </div>
        );
    }
}
