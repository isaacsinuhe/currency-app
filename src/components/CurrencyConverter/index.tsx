import * as React from 'react';
import './index.css';
import { SelectField, MenuItem, TextField } from 'material-ui'

export default class CurrencyConverter extends 
    React.Component <CurrencyConverter.props, CurrencyConverter.state> {
    style = {
        inputWidth: { width: '120px' },
        selectWidth: { width: '120px' }
    }
    state: CurrencyConverter.state = {
        currencyFrom: { currencyCode: 'USD', currentRateValue: 1, currencySymbol: '$' },
        currencyTo: { currencyCode: 'USD', currentRateValue: 1, currencySymbol: '$' },
        quantity: 1.00,
        result: 1.00
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
    fromChangeHandler = (event: any, index: number, value: string) => {
        const currencyFrom = this.currenciesMock.find((currency) =>
            currency.currencyCode === value
        )
        if (currencyFrom) {
            this.setState((prevState, props) => ({
                currencyFrom,
                result: this.convertCurrency({currencyFrom})
            }))
        }
    }
    toChangeHandler = (event: any, index: number, value: string) => {
        const currencyTo = this.currenciesMock.find((currency) =>
            currency.currencyCode === value
        )
        
        if (currencyTo) {
            this.setState((prevState, props) => ({
                currencyTo,
                result: this.convertCurrency({currencyTo})
            }))
        }
    }
    componentWillMount () {
        const [initialCurrency] = this.currenciesMock
        this.setState((prevState, props) => ({
            currencyFrom: initialCurrency,
            currencyTo: initialCurrency,
            quantity: 1.00,
            result: 
                initialCurrency.currentRateValue / initialCurrency.currentRateValue
        }))
    }
    render() {
        return (
            <div className="CurrencyConverter">
                <h2> Currency converter</h2>
            <div className="currencyInputs">
                <div className="container">
                    {/* <div className="tag">From: </div> */}
                    <SelectField
                        name="from"
                        floatingLabelText="Currency From"
                        value={this.state.currencyFrom.currencyCode}
                        onChange={this.fromChangeHandler}
                        style={this.style.selectWidth}
                    >
                            {
                            this.currenciesMock
                                // .filter(currency => currency !== this.state.currencyTo)
                                .map((currency, index) => {                                    
                                    return currency ? (
                                        <MenuItem
                                            value={currency.currencyCode}
                                            primaryText={currency.currencyCode}
                                            key={index}
                                        />
                                    ) :
                                        ''
                                })
                            }
                    </SelectField>
                    <TextField
                        style={this.style.inputWidth}
                        name="quantity"
                        value={this.state.quantity}
                        step={0.01}
                        onChange={this.quantityChangeHandler}
                        type="number"
                    />
                </div>
                <div className="container">
                    {/* <div className="tag" >To: </div> */}
                    <SelectField 
                        name="to"
                        floatingLabelText="Currency To"
                        style={this.style.selectWidth}
                        value={this.state.currencyTo.currencyCode}
                        onChange={this.toChangeHandler}
                    >
                            {
                            this.currenciesMock
                                // .filter(currency => currency !== this.state.currencyFrom)
                                .map((currency, index) => {
                                    return currency ? (
                                        <MenuItem
                                            value={currency.currencyCode}
                                            primaryText={currency.currencyCode}
                                            key={index}
                                        />
                                    ) :
                                        ''
                                })
                            }
                    </SelectField>
                    <TextField
                        style={this.style.inputWidth}
                        disabled={true}
                        name="result"
                        value={this.state.result}
                    />
                </div>

            </div>
            </div>
        );
    }
}
