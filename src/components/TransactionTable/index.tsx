import * as React from 'react';
import './index.css';
import { Table, TableHeader, TableRow, TableBody, TableRowColumn, TableHeaderColumn, Paper } from 'material-ui';

export default function TransactionTable (props: TransactionTable.props) {
    const dataPropNames = props.dataList.length ? 
        Object.keys(props.dataList[0]) :
        ['No Data could be fetched']
        
    const style = {
        height: '300px'
    }
    
    return (
        <Paper zDepth={3} className="TransactionTable">
            <Table 
                height={style.height}
                fixedHeader={true}
                selectable={false}
                multiSelectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        {dataPropNames.map((prop, index) => (
                                <TableHeaderColumn key={'' + index}>
                                    {prop.toUpperCase()}
                                </TableHeaderColumn>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody
                    displayRowCheckbox={false}
                    showRowHover={true}
                >
                    {props.dataList.map((datum, index) => (
                        <TableRow key={index}>
                            {Object.values(datum).map((property, propIndex) => (
                                <TableRowColumn key={'' + propIndex}>
                                    {property}
                                </TableRowColumn>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}
