import * as React from 'react';
import './index.css';
import * as moment from 'moment'
import { TextField, DatePicker, Paper, SelectField, MenuItem, RaisedButton } from 'material-ui';

export default class TransactionInput extends React.Component<TransactionInput.props, TransactionInput.state> {
    state: Transactions.transaction<any> = {
        date: moment(),
        type: 'purchase',
        concept: 'Stablishment',
        ammount: 0
    }

    handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleDateChange = (event: Event, date: Date) => {
        this.setState({
            date: date,
        });
    };

    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
                        onChange={this.handleInputChange}
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
                        secondary={true} 
                        label="Add" 
                        fullWidth={true}
                    />
                </form>
            </Paper>
        )
    }
}
