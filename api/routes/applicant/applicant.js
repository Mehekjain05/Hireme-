const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Applicant = require("../../models/applicant/applicant")

const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');



// const mongoURI = 'mongodb+srv://hatim:hatim@cluster0.f7or37n.mongodb.net/?retryWrites=true&w=majority';
// const conn = mongoose.createConnection(mongoURI);
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// // Create storage engine
// const storage = new GridFsStorage({
//   url: mongoURI,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

// app.post('/upload', upload.single('file'), (req, res) => {
//     res.json({ file: req.file });
//     res.redirect('/');
//   });
router.get('/login', (req, res) => {
    res.render("applicant/login")
})

router.get('/step1/(:type)', (req, res) => {
    if(req.params.type == 'user'){
        res.render("applicant/steps/step1")
    }
    else{
        res.send("Resgister Recruiter!!!")
    }
})

router.post('/step1', async(req, res) => {
    const user = new Applicant({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        username: req.body.username,
        mobile: req.body.mob,
        pass: req.body.pass
    })
    await user.save()
    res.redirect("/applicant/step2")
})

router.get('/step2', (req, res) => {
    res.render("applicant/steps/step2")
})

router.get('/step3', (req, res) => {
    res.render("applicant/steps/step3")
})


module.exports = router