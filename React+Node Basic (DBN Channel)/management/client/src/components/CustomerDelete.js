import React, { Component } from 'react'

export class CustomerDelete extends Component {

    deleteCustomer(id) {
        const url = `/api/customer/${id}`;
        fetch(url, {
            method: 'DELETE'
        }).then(response => {
            this.props.stateRefresh();
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.deleteCustomer(this.props.id) }}>삭제</button>
            </div>
        )
    }
}

export default CustomerDelete
