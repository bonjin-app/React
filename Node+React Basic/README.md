# Node + React Basic


### Node
Install
https://nodejs.org/ko/

Version
```bash
node -v
```

### NPM
Install
```bash
npm init
or
npm init -y
```
### Express
https://expressjs.com/ko/starter/hello-world.html
```bash
npm install express --save
```


### React
- Virtual DOM 
1. JSX를 렌더링 한다.
    Virtual DOM이 Update됨.
2. Virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.
3. Virtual DOM의 변경된 부분을 찾는다. (diffing)
4. 바뀐 부분만 Real DOM에서 변경해준다.

- Create
create-react-app Command로 프로젝트를 시작할 수 있다.

- Install
기존에는 아래 방식처럼 진행했었다.
```bash
npm install -g create-react-app
```

npx를 이용하여 다운받지 않고 사용가능하다.
```bash
npx create-react-app .
```
- Start
```bash
npm run start
```

### NPM (node package manager)
레지스트리. 라이브러리를 담고있는 역할.
배포할때 npm run build .

- install -g 
옵션을 주지 않으면 local설치가 된다.
node_modules가 설치된다.

옵션을 주면 피시에 설치가 된다.

### NPX
npx가 npm registry에서 create-react-app을 찾아서 다운로드 없이 실행하게 된다.
1. Disk Space를 낭비하지 않을 수 있다.
2. 항상 최신 버전을 사용할 수 있다.

### Babel
최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서
최선 자바스크립트 문법을 구형 브라우저에서도 돌 수 있게 변환 해주는것.

### Webpack
복잡하게 있는 모듈들을 정적 파일로 변경해준다.
src 폴더만 관리해준다.
이미지를 넣을때 src에 넣어서 관리해주도록 해주는게 좋다.

### React
https://reactrouter.com/web/guides/quick-start

src 
    Redux를 위한 폴더들
    - _actions
    - _reducer

    페이지에 관련된 css파일이나, componenet를 넣는다.
    - components/views

    Routing 관련 일을 처리한다.
    - App.js 

    환경 변수 같은 정보를 정한다.
    - Config.js

    Higher Order Component의 약자
    - hoc

    utility 파일을 정리.
    - utils

- Router
Router, Switch, Route ...

```bash
npm install react-router-dom --save
```

Route 연결
```js
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

줄임 표현식
```js
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
        </Switch>
      </div>
    </Router>
  );
}
```

### Axios

```bash
npm install axios --save
```

- 같은 Origin은 Same-origin requests(always allowed) 허용이 된다.

- 다른 Origin은 Cors 정책때문에 Cross-Origin Resource Sharing 허용되지 않는다.
Client port
Server port 가 다르다.

- 해결
Proxy 를 사용해서 해결
1. Proxy Server에서 임이로 바꿔 버릴 수 있다.
그래서 인터넷에서 접근하는 사람의 IP를 모르게 된다.
2. 보내는 데이터도 임의로 바꿀 수 있다.

Proxy Server
1. 방화벽기능
2. 웹 필터 기능
3. 캐쉬 데이터, 공유 데이터 제공 기능. (Proxy Server에 담아둘 수 있다.)

Proxy Server 사용이유
1. 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어.
2. 캐쉬를 이용해 더 빠른 인터넷 이용 제공
3. 더 나은 보안 제공.
4. 이용 제한된 사이트 접근 가능

Configuring the Proxy Manually
https://create-react-app.dev/docs/proxying-api-requests-in-development/

Install
```bash
npm install http-proxy-middleware --save
```

src/setupProxy.js
```js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // ...
};
```

### Concurrentyly
client, server 동시 실행

```bash
npm install concurrently --save
```
package.json -> scripts
"devStart": "concurrently \"npm run backend\" \"npm run start --prefix client\""