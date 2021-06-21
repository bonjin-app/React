
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
- Schema 생성
mongoose.Schema({})

- Model 생성
mongoose.model('User', scheme)

## 4. GIT
- Version 확인
```bash
git --version
```

- git 저장소 생성
```bash
git init
```

- git 상태
```bash
git status
```

- Default
working directory

- ADD
staging area

- COMMIT
git repository(LOCAL)

- PUSH
git repository(REMOTE)

- Add를 한 뒤 .gitignore 생성시. (push 이전)

```bash
git rm --cached node_modules -r
```

## 5. BodyParser & Postman
express에 포함됨.
```js
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// application/json
app.use(express.json())
```

## 6. nodemon
소스를 변경할 때 그걸 감지해서 자동으로 서버를 재 시작해주는 tool
```bash
npm install nodemon --save-dev
```

- npm script 생성
package.json
    - scripts
        - "devStart": "nodemon index.js",

- nodemon 실행
```bash
npm run devStart
```

## 7. 설정정보 관리
- Local환경.
development

- Deploy(배포) 환경
Heroku 설정 파일에 Config Variable을 넣는다.
production

## 8. Bcrypt 암호화
```bash
npm install bcrypt --save
```

- 암호화 순서
salt 생성
plaintext, salt로 bcrypt.hash 암호화 수행.

- user.js 추가.
save 이전에 수행.
```js 
userScheme.pre('save', function(next) {
    var user = this

    if(user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err)

                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})
```

- jsonwebtoken
https://www.npmjs.com/package/jsonwebtoken

- Install
```bash
npm install jsonwebtoken --save
```

- Cookie에 저장
```bash
npm install cookie-parser
```

## 9. Auth