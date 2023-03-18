const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Applicant = require("../../models/applicant/applicant")


router.get('/login', (req, res) => {
    res.render("applicant/login")
})

router.get('/register', async(req, res) => {
    
    const user = new Recruiter({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            username: req.body.username,
            post: req.body.post,
            company_name: req.body.company_name,
            mobile: req.body.mob,
            pass: req.body.pass
        })
        await user.save()
    res.render("applicant/login")
})


module.exports = router