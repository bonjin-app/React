# React MaterialUI Template


### Private, Public routes with React-router-DOM
https://medium.com/@tomlarge/private-routes-with-react-router-dom-28e9f40c7146


### Library
- react-router-dom
https://www.npmjs.com/package/react-router-dom

예시:
https://tantangerine.tistory.com/7

- classnames
https://www.npmjs.com/package/classnames

- tinycolor2
https://www.npmjs.com/package/tinycolor2

- 
@material-ui/core
@material-ui/icons
@material-ui/styles
@mdi/js
@mdi/react


### package.json
```js
import Login from '../login'
```
위처럼 import 하는 방법과 아래의 방법이 있다.
```js
import Login from '../login/Login.js'
```
폴더 경로만 입력하고 package.json을 읽어서 main을 찾는다.

```js
{
    "name": "Login",
    "version": "0.0.0",
    "main": "Login.js",
    "private": true
}
```



# Node

sequelize