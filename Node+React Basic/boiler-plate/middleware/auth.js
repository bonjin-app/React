const { User } = require('../models/user')

let auth = (req, res, next) => {
    // 인증처리를 하는곳

    // cookie에서 token을 가져온다.
    let token = req.cookie.x_auth

    // token 을 복호화 하여 user를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err
        if(!user) return res.json({ isAuth: false, error: true })

        req.token = token
        req.user = user

        next()
    })
}

module.exports = { auth }