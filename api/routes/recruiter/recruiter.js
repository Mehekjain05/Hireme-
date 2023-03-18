const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')

const Applicant = require("../../models/applicant/applicant")


router.get('/login', (req, res) => {
    res.render("Recruiter/Login")
})


module.exports = router