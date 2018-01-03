import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="component">
                <ul>
                    <img src="logo.png" alt="transactions-logo"/>
                    <Link to="/transactions">Transactions</Link>
                    <Link to="/currency-converter" >Currency Converter</Link>
                </ul>
            </div>
        );
    }
}
