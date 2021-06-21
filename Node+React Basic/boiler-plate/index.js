const express = require('express')
const app = express()
const port = 5000
const cookieParser = require('cookie-parser')
const config = require('./config/key')

const { User } = require('./models/user')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("MongoDB Connected...")
}).catch(err => {
    console.log(err)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  // 회원가입시 필요한 정보들을 client 에서 가져오면 데이터를 DB에 넣어준다.
  
  const user = User(req.body)
  user.save((err, info) => {
    if(err) return res.json({ 
      success: false,
      err
    })

    return res.status(200).json({
        success: true
    })
  })
})

app.post('/login', (req, res) => {
  // 요청된 이메일을 데이터베이스에서 찾는다.
  User.findOne({ email: req.body.email }, (err, info) => {
    if(!info) {
      return res.json({
        success: false,
        message: "존재하지 않는 회원입니다."
      })
    }

    // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는지 확인한다.
    info.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) return res.json({
        success: false,
        message: "비밀번호가 일치하지 않습니다."
      })

      // 토큰을 생성한다.
      info.generateToken((err, user) => {
        if(err) return res.status(400).send(err)

        console.log(user)

        // 토큰을 저장한다.
        // 쿠키, 로컬스토리지
        res.cookie("x_auth", user.token)
        .status(200)
        .json({
          success: true,
          id: user._id,
        })
      })
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})