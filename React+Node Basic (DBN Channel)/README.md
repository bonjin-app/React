# React Node 동빈나 유튜브 강의 실습

### CodePen
https://reactjs.org/redirect-to-codepen/hello-world


### Props
부모에서 자식으로 데이터를 전달할때

기본 값
Component.defaultProps = {

}

### API
https://jsonplaceholder.typicode.com
```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

### Management System
본 프로젝트는 React 강의 목적으로 만들어진 고객관리 시스템 입니다.