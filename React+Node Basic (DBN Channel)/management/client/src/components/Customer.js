import React, { Component } from 'react'
import { TableRow, TableCell } from '@material-ui/core'
import CustomerDelete from './CustomerDelete';
class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.customer.id}</TableCell>
                <TableCell><img src={this.props.customer.image} style={{
                    height: '64px', width: '64px'
                }} /></TableCell>
                <TableCell>{this.props.customer.name}</TableCell>
                <TableCell>{this.props.customer.birthday}</TableCell>
                <TableCell>{this.props.customer.gender}</TableCell>
                <TableCell>{this.props.customer.job}</TableCell>
                <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.customer.id} /></TableCell>
            </TableRow>
        )
    }
}

export default Customer;
