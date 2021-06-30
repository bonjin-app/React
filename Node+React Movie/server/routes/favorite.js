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
                favoriteCount: data.length
            })

        })
})

module.exports = router;
