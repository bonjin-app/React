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