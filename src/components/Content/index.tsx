import * as React from 'react'
import './index.css';
import { Route } from 'react-router'
import CurrencyConverter from '../CurrencyConverter'
import Transactions from '../Transactions'

export default class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <Route path="/transactions" component={Transactions} />
                <Route path="/currency-converter" component={CurrencyConverter} />
            </div>
        );
    }
}
