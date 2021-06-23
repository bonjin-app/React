# Opentutorials React

https://ko.reactjs.org/

사용자 정의 태그를 만들어서 사용한다.
이것을 Components 라고 한다.

## npm 설치
npm install -g create-react-app .
create-react-app -V

## npx
create-react-app 임시로 설치해서 딱 1번만 실행하고 지운다.
설치할 때마다 다운받기 때문에 항상 최신상태다.

## Start
npm run start

## Deploy
build 파일이 생긴다.

```bash
npm run build
```

## serve
build 파일을 서버를 통해 볼 수 있다.
npx serve -s build

## jsx
태그를 작성하거나 다양한 편의를 제공하는.

## React Developer Tools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ko

## state
props, state

## bind
```js
var obj = {
    name: 'gigas'
}

function bindTest() {
    console.log(this.name);
}.bind(obj);

```

## event
```js
<a href={`/content/${data[i].id}`}
    data-id={data[i].id}
    onClick={function(e) {
        e.preventDefault();
        this.props.onChagePage(e.target.dataset.id);
    }.bind(this)}>{data[i].title}</a>
```

```js
<a href={`/content/${data[i].id}`}
    data-id={data[i].id}
    onClick={function(id, e) {
        e.preventDefault();
        this.props.onChagePage(id);
    }.bind(this, data[i].id)}>{data[i].title}</a>
```