import * as React from 'react';
import './index.css';

export default class TransactionTable extends React.Component {
    render() {
        return (
            <div className="TransactionTable">
                <table>
                    <thead>
                        <tr>
                            <td colSpan={2}>aaa</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>hd</th>
                            <th>hd</th>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>data</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}>footer</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}
