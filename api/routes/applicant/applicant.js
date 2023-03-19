const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Applicant = require("../../models/applicant/applicant")
const multer = require("multer")
const fs = require("fs");
const path = require('path');
require("firebase/storage");
// const firebase = require('../../utils/firebase');
// const storage = firebase.storage().ref();
// const store = multer.memoryStorage();
// var upload = multer({ storage: store });

// const middleware = upload.fields([
//     { name: 'Resumepdf', maxCount: 1 },
// ])




router.get('/login', (req, res) => {
    res.render("applicant/login")
})

router.get('/step1/(:type)', (req, res) => {
    if (req.params.type == 'user') {
        res.render("applicant/steps/step1")
    }
    else {
        res.send("Resgister Recruiter!!!")
    }
})

router.post('/step1', async (req, res) => {
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

router.post('/step2', (req, res) => {
    // mongoose.connect('mongodb+srv://hatim:hatim@cluster0.f7or37n.mongodb.net/?retryWrites=true&w=majority');
    // const pdfSchema = new mongoose.Schema({
    //     name: String,
    //     data: Buffer
    // });
    // const Pdf = mongoose.model('Pdf', pdfSchema);
    // const filePath = path.join(__dirname, 'cv-final.pdf');
    // const pdfBuffer = fs.readFileSync(filePath);
    // const newPdf = new Pdf({
    //     name: 'My PDF File',
    //     data: pdfBuffer
    // });
    // newPdf.save((err, savedPdf) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log('PDF file saved to database:', savedPdf);
    //     }
    // });
});

router.get('/step3', (req, res) => {
    res.render("applicant/steps/step3")
})


module.exports = router