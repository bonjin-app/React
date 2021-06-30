const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

//=================================
//             Favorite
//=================================
router.post('/number', (req, res) => {
    let movieId = req.body.movieId;

    // mongoDB에서 favorite count 가져오기 .
    Favorite.find({ movieId: movieId })
        .exec((err, data) => {
            if (err) {
                return res.status(400).send(err)
            }

            // count 정보를 response
            res.status(200).json({
                success: true,
                data: data.length
            })

        })
})

router.post('/get', (req, res) => {
    Favorite.find({ userFrom: req.body.userFrom })
        .exec((err, data) => {
            if (err) {
                return res.status(400).send(err)
            }
            res.status(200).json({
                success: true,
                data: data
            })
        })
})

router.post('/favorited', (req, res) => {
    Favorite.find({
        movieId: req.body.movieId,
        userFrom: req.body.userFrom
    })
        .exec((err, data) => {
            if (err) {
                return res.status(400).send(err)
            }

            let result = false;
            if (data.length !== 0) {
                result = true;
            }

            // count 정보를 response
            res.status(200).json({
                success: true,
                data: result
            })

        })
})

router.post('/add', (req, res) => {
    const favorite = Favorite(req.body);
    favorite.save((err, data) => {
        if (err) return res.status(400).send(err);

        return res.status(200)
            .json({
                success: true
            })
    });
})

router.post('/remove', (req, res) => {

    Favorite.findOneAndDelete({
        movieId: req.body.movieId,
        userFrom: req.body.userFrom
    }).exec((err, data) => {
        if (err) return res.status(400).send(err);

        res.status(200).json({
            success: true,
            data: data
        })
    })
})

module.exports = router;
