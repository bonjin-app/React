import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/512/512/1',
    name: '홍길동1',
    birthday: '900000',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 2,
    image: 'https://placeimg.com/512/512/2',
    name: '홍길동2',
    birthday: '900000',
    gender: '남자',
    job: '대학생'
  },
  {
    id: 3,
    image: 'https://placeimg.com/512/512/3',
    name: '홍길동3',
    birthday: '900000',
    gender: '남자',
    job: '대학생'
  },
]

function App() {
  return (
    <>
      {customers.map((m, i) => {
        return (
          <Customer key={i} customer={m} />
        )
      })}
    </>
  );
}

export default App;
