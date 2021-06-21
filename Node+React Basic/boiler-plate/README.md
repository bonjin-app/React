
## 1. node.js 와 express.js 설치

- npm script 생성
package.json
    - scripts
        - "start": "node index.js",

- npm 실행
```bash
npm run start
```

## 2. mongoDB
https://www.mongodb.com/

- 회원가입 & 로그인
- Clustor 추가
- IP 추가
Network Access
    - IP Access: ADD IP ADDRESS
        
- mongoose
```bash
npm install mongoose --save
```

```js
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://bonjin:<password>@boilerplate.lphlf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("MongoDB Connected...")
}).catch(err => {
    console.log(err)
})
```

## 3. MongoDB Model & Schema
