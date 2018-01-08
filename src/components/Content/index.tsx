import * as React from 'react'
import './index.css';
import { Route } from 'react-router'
import CurrencyConverter from '../CurrencyConverter'
import Transactions from '../Transactions'
import Home from '../Home'
import { Card } from 'material-ui';

export default function Content () {
    return (
        <Card>
            <Route exact={true} path="/" component={Home} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/currency-converter" component={CurrencyConverter} />
        </Card>
    )
}
