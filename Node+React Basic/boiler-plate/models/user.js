const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')

const userScheme = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minLength: 5
    },
    lastname: {
        type: String,
        naxLength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

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

userScheme.methods.comparePassword = function(plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) return callback(err)

        callback(null, isMatch)
    })
}

userScheme.methods.generateToken = function(callback) {
    var user = this
    // jsonwebtoken을 이용해서 token을 생성
    var token = jwt.sign(user._id.toHexString(), 'secretKey')
    user.token = token
    user.save(function(err, user) {
        if(err) return callback(err)

        callback(null, user)
    })
}

userScheme.methods.findByToken = function(token, callback) {
    var user = this

    // token decode
    jwt.verify(token, 'secretKey', function(err, decode) {
        // token == db.token
        user.findOne({
            _id: decode,
            token: token
        }, function(err, user) {
            if (err) return callback(err)
            callback(null, user)
        })
    })
}


const User = mongoose.model('User', userScheme)

module.exports = { User }