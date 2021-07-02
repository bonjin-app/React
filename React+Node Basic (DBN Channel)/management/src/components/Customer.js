import React, { Component } from 'react'

class Customer extends Component {
    render() {
        return (
            <div>
                <CustomerProfile
                    id={this.props.customer.id}
                    image={this.props.customer.image}
                    name={this.props.customer.name} />
                <CustomerInfo customer={this.props.customer} />
            </div>
        )
    }
}

class CustomerProfile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name} ({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.customer.birthday}</p>
                <p>{this.props.customer.gender}</p>
                <p>{this.props.customer.job}</p>
            </div>
        )
    }
}

export default Customer;
