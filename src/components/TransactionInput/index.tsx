import * as React from 'react';
import './index.css';
import * as moment from 'moment'
import { TextField, DatePicker, Paper, SelectField, MenuItem, RaisedButton } from 'material-ui';

export default class TransactionInput extends React.Component<TransactionInput.props, TransactionInput.state> {
    state: Transactions.Transaction<any> = {
        date: moment().toDate(),
        type: 'purchase',
        concept: 'Stablishment',
        ammount: 0
    }

    handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const value = target.value;
        const name = target.name;
        console.log(target)
        this.setState((prevState) => ({
            [name]: value
        }))
    }

    handleSelectChange = (event: React.SyntheticEvent<HTMLSelectElement>, index: number, value: any) => {
        this.setState((prevState) => ({
            type: value
        }))
    }
    handleDateChange = (event: Event, date: Date) => {
        this.setState((prevState) => ({
            date: date,
        }));
    }

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.add({...this.state})
    }

    render () {
        return (
            <Paper zDepth={3} className="TransactionInput">
                <form onSubmit={this.onSubmit}>

                    <h2>{this.props.title}</h2>
                    
                    <DatePicker
                        name="date"
                        floatingLabelText="Date"
                        hintText="Select the date"
                        mode="landscape"
                        id="dateInput"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        fullWidth={true}
                    />

                    <SelectField
                        name="from"
                        floatingLabelText="Type of transaction"
                        value={this.state.type}
                        onChange={this.handleSelectChange}
                        fullWidth={true}
                    >
                        <MenuItem
                            value="purchase"
                            primaryText="Purchase"
                        />
                        <MenuItem
                            value="transfer"
                            primaryText="Transfer"
                        />
                        <MenuItem
                            value="refund"
                            primaryText="Refund"
                        />
                    </SelectField>

                    <TextField
                        floatingLabelText="Concept"
                        name="concept"
                        type="text"
                        id="conceptInput"
                        value={this.state.concept}
                        onChange={this.handleInputChange}
                        fullWidth={true}
                    />

                    <TextField
                        name="ammount"
                        type="number"
                        id="ammountInput"
                        step={0.01}
                        floatingLabelText="Ammount"
                        value={this.state.ammount}
                        onChange={this.handleInputChange}
                        fullWidth={true}
                    />
                    <RaisedButton 
                        type="submit" 
                        primary={true} 
                        label="Add" 
                        fullWidth={true}
                    />
                </form>
            </Paper>
        )
    }
}
