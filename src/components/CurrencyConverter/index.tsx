import * as React from 'react';
import './index.css';

export default class CurrencyConverter extends 
    React.Component <CurrencyConverter.props, CurrencyConverter.state> {

    state: CurrencyConverter.state = {
        currencyFrom: undefined,
        currencyTo: undefined,
        quantity: 0,
        result: 0
    }

    currenciesMock: CurrencyConverter.currencyMock = [
        { currencyCode: 'USD', currentRateValue: 1, currencySymbol: '$' },
        { currencyCode: 'EUR', currentRateValue: 0.5, currencySymbol: '$' },
        { currencyCode: 'CAD', currentRateValue: 1.5, currencySymbol: '$' },
        { currencyCode: 'MXN', currentRateValue: 18, currencySymbol: '$' },
        { currencyCode: 'CNY', currentRateValue: 2, currencySymbol: '$' },
        { currencyCode: 'INR', currentRateValue: 4, currencySymbol: '$' },
    ]
    convertCurrency = (
        { 
            quantity = this.state.quantity, 
            currencyFrom = this.state.currencyFrom, 
            currencyTo = this.state.currencyTo
        }) => {
            
            let {result} = this.state
            if (currencyFrom && currencyTo) {
                result = quantity * currencyTo.currentRateValue / currencyFrom.currentRateValue
            }
            return result
    }
    quantityChangeHandler = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((prevState, props) => ({ 
            ...prevState, 
            quantity: + value,
            result: this.convertCurrency({quantity: + value})
        }))
    }
    fromChangeHandler = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
        const currencyFrom = this.currenciesMock.find((currency) =>
            currency.currencyCode === value
        )
        this.setState((prevState, props) => ({
            currencyFrom,
            result: this.convertCurrency({currencyFrom})
        }))
    }
    toChangeHandler = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
        const currencyTo = this.currenciesMock.find((currency) =>
            currency.currencyCode === value
        )
        this.setState((prevState, props) => ({
            currencyTo,
            result: this.convertCurrency({currencyTo})
        }))
    }
    componentWillMount () {
        const [initialCurrency] = this.currenciesMock
        this.setState((prevState, props) => ({
            currencyFrom: initialCurrency,
            currencyTo: initialCurrency,
            quantity: 1,
            result: 
                initialCurrency.currentRateValue / initialCurrency.currentRateValue
        }))
    }

    render() {
        return (
            <div className="CurrencyConverter">

                <div className="inputs">
                    <div className="from">
                        <div className="tag">From: </div>
                        <select 
                            name="from"
                            onChange={this.fromChangeHandler}
                        >
                                {
                                this.currenciesMock
                                    // .filter(currency => currency !== this.state.currencyTo)
                                    .map((currency, index) => {
                                        return currency ? (
                                            <option
                                                key={index}
                                                value={currency.currencyCode}
                                            >
                                                {currency.currencyCode}
                                            </option>
                                        ) :
                                            ''
                                    })
                                }
                        </select>
                        <input
                            value={this.state.quantity}
                            onChange={this.quantityChangeHandler}
                            type="number"
                        />
                    </div>
                    <div className="to">
                        <div className="tag" >To: </div>
                        <select 
                            name="to" 
                            onChange={this.toChangeHandler}
                        >
                                {
                                this.currenciesMock
                                    // .filter(currency => currency !== this.state.currencyFrom)
                                    .map((currency, index) => {
                                        return currency ? (
                                            <option
                                                key={index}
                                                value={currency.currencyCode}
                                            >
                                                {currency.currencyCode}
                                            </option>
                                        ) :
                                            ''
                                    })
                                }
                        </select>
                        <input
                            readOnly={true} 
                            className="result"
                            value={this.state.result}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
