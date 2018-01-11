import * as React from 'react';
import axios from 'axios'
import './index.css';
import { SelectField, MenuItem, TextField, Paper } from 'material-ui'
import { connect } from 'react-redux';
import { hydrateCurrenciesAction, 
    quantityChangeAction, 
    saveResultAction, 
    saveCurrencyToAction, 
    saveCurrencyFromAction } from '../../modules/currencies';

export class CurrencyConverter extends React.Component <CurrencyConverter.props> {
    style = {
        inputWidth: { width: '120px' },
        selectWidth: { width: '120px' }
    }

    convertCurrency = (
        { 
            quantity = this.props.quantity, 
            currencyFrom = this.props.currencyFrom, 
            currencyTo = this.props.currencyTo
        }) => {
            let {result} = this.props
            if (currencyFrom && currencyTo) {
                result = quantity * currencyTo.currentRateValue / currencyFrom.currentRateValue
            }
            this.props.saveResult(result)
    }
    quantityChangeHandler = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        this.props.quantityChange( + value )
        this.convertCurrency({ quantity: + value })
    }
    fromChangeHandler = (event: any, index: number, value: string) => {
        const currencyFrom = this.props.currencyList.find((currency) =>
            currency.currencyCode === value
        )
        if (currencyFrom) {
            this.props.saveCurrencyFrom(currencyFrom)
            this.convertCurrency({ currencyFrom })
        }
    }
    toChangeHandler = (event: any, index: number, value: string) => {
        const currencyTo = this.props.currencyList.find((currency) =>
            currency.currencyCode === value
        )
        
        if (currencyTo) {
            this.props.saveCurrencyTo(currencyTo)
            this.convertCurrency({ currencyTo })
        }
    }

    async componentWillMount () {
        const { data: rates } = await axios.get<CurrencyConverter.currency[]>('/currency/rates')
        this.props.hydrateCurrencies(rates)
    }

    render() {
        return (
            <div className="CurrencyConverter">
                <h2> Currency converter</h2>
            <Paper zDepth={3} className="currencyInputs">
                <div className="container">
                    {/* <div className="tag">From: </div> */}
                    <SelectField
                        name="from"
                        floatingLabelText="Currency From"
                        value={this.props.currencyFrom ? this.props.currencyFrom.currencyCode : 'NOT FOUND'}
                        onChange={this.fromChangeHandler}
                        style={this.style.selectWidth}
                    >
                            {
                            this.props.currencyList
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
                        value={this.props.quantity}
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
                        value={this.props.currencyTo ? this.props.currencyTo.currencyCode : 'NOT FOUND'}
                        onChange={this.toChangeHandler}
                    >
                            {
                            this.props.currencyList
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
                        value={this.props.result}
                    />
                </div>

            </Paper>
            </div>
        );
    }
}

export default connect<
    CurrencyConverter.stateToProps,
    CurrencyConverter.dispatchToProps,
    CurrencyConverter.ownProps, CurrencyApp.Store>(

    ({ currencies: {all, currencyFrom, currencyTo, quantity, result} }) => ({
        currencyList: all,
        currencyFrom,
        currencyTo,
        quantity,
        result,
    }),
    {
        hydrateCurrencies: hydrateCurrenciesAction,
        quantityChange: quantityChangeAction,
        saveResult: saveResultAction,
        saveCurrencyFrom: saveCurrencyFromAction,
        saveCurrencyTo: saveCurrencyToAction,
    })
    (CurrencyConverter)