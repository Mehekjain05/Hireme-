const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Applicant = require("../../models/applicant/applicant")



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