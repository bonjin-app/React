const express = require('express');
const router = express.Router();
// const { Video } = require("../models/Video");
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg')

// STORAGE MULTER CONFIG
let storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, callback) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.mp4') {
            return callback(res.status(400).end('only jpg, png, mp4, is allowed'), false);
        }
        callback(null, true);
    }
})
const upload = multer({ storage: storage }).single("file");

//=================================
//             Video
//=================================
router.post('/upload', (req, res) => {

    // 비디오를 서버에 저장한다.
    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, data: err })
        }

        return res.json({
            success: true,
            url: res.req.file.path,
            fileName: res.req.file.filename
        })
    })
})

router.post('/thumbnail', (req, res) => {

    let filePath = "";
    let fileDuration = ""

    console.log('body', req.body)

    // 비디오 정보 가져오기
    ffmpeg.ffprobe(req.body.url, (error, metadata) => {
        console.log('error', error)
        console.log(metadata)
        console.log(metadata.format.duration)
        fileDuration = metadata.format.duration
    })

    // 썸네일 생성
    ffmpeg(req.body.url)
        .on('filenames', (filenames) => {
            filePath = "uploads/thumbnails/" + filenames[0];
        })
        .on('end', () => {
            return res.json({
                success: true,
                url: filePath,
                fileDuration: fileDuration
            })
        })
        .on('error', (error) => {
            return res.json({ success: false, data: error })
        })
        .screenshot({
            count: 3,
            folder: 'uploads/thumbnails',
            size: '230x240',
            filename: 'thumbnail-%b.png'
        })
})

module.exports = router;
