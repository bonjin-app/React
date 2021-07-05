import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import { Table, TableHead, TableBody, TableRow, TableCell, CircularProgress, Paper, withStyles } from '@material-ui/core';
import { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    width: '100%',
    minWith: 1080
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  progress: {
    margin: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
})
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
    const { classes } = this.props;
    const cellList = ["번호", "프로필 이미지", "이름", "생년월일", "성별", "직업", "설정"];

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              고객관리 시스템
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>

        <div className={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh} />
        </div>

        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                {cellList.map((m, i) => <TableCell key={i}>{m}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map((m, i) => {
                return (
                  <Customer stateRefresh={this.stateRefresh} key={i} customer={m} />
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

        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);