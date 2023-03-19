const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Applicant = require("../../models/applicant/applicant")
const multer = require("multer")
const fs = require("fs");
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
    if(req.params.type == 'user'){
        res.render("applicant/steps/step1")
    }
    else{
        res.render("Recruiter/Registration/step1")
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

// router.post('/step2', (req, res) => {
//     const user = new Applicant({
//         _id: new mongoose.Types.ObjectId(),
//         email: "askbhbsak",
//         username: "asjnnsa",
//         mobile: 71619242,
//         pass: "akskjs"
//     })
//     if (req.files) {
//         var count = 0
//         Object.keys(req.files).forEach(key => {
//             var file = (req.files[key])[0]
//             const imageRef = storage.child("/applicant/" +req.session.name);
//             imageRef.put(file.buffer, { contentType: file.mimetype }).then(snapshot => {
//                 imageRef.getDownloadURL().then(function (url) {
//                     sellerAcc[key] = url
//                     count++
//                     if (count == Object.keys(req.files).length) {
//                         sellerAcc.save()
//                             .then(doc => {
//                                 res.render("applicant/steps/step2")
//                             })
//                     }
//                 })
//             })
//         })
//     }
// })

router.get('/step3', (req, res) => {
    res.render("applicant/steps/step3")
})


module.exports = router