import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import { Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';
import { Component } from 'react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    })

    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err))
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({
      completed: completed >= 100 ? 0 : completed + 1
    })
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
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
            {this.state.customers ? this.state.customers.map((m, i) => {
              return (
                <Customer key={i} customer={m} />
              )
            }) :
              <TableRow>
                <TableCell colSpan={6} align='center'>
                  {/* <CircularProgress variant="determinate" value={this.state.completed} /> */}
                  <CircularProgress color="secondary" />
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>

        <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default App;