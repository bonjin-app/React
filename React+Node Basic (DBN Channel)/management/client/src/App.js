import './App.css';
import Customer from './components/Customer';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auth'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동1',
    birthday: '900000',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '홍길동2',
    birthday: '900000',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '홍길동3',
    birthday: '900000',
    gender: '남자',
    job: '대학생'
  },
]

export default function App(props) {

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
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
          {customers.map((m, i) => {
            return (
              <Customer key={i} customer={m} />
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}
