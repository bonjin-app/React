import React, { Component } from 'react'
import { Dialog, DialogActions, DialogTitle, DialogContent, Button, Typography } from '@material-ui/core';

export class CustomerDelete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handlePopUpOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    handlePopUpClose = () => {
        this.setState({
            isOpen: false
        })
    }

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
                <Button variant="contained" color="secondary"
                    onClick={this.handlePopUpOpen}>삭제</Button>
                <Dialog open={this.state.isOpen} onClose={this.handlePopUpClose}>
                    <DialogTitle>
                        삭제 경고
                    </DialogTitle>
                    <DialogContent>
                        <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={(e) => {
                            this.deleteCustomer(this.props.id)
                        }}>삭제</Button>
                        <Button variant="outlined" color="primary" onClick={this.handlePopUpClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CustomerDelete
