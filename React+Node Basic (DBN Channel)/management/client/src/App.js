import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Component } from 'react';
class App extends Component {

  state = {
    customers: ''
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.customers && this.state.customers.map((m, i) => {
            return (
              <Customer key={i} customer={m} />
            )
          })}
        </TableBody>
      </Table>
    );
  }
}

export default App;