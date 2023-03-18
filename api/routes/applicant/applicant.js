const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')

const Applicant = require("../../models/applicant/applicant")


router.get('/login', (req, res) => {
    res.render("applicant/login")
})
router.get('/step1', (req, res) => {
    res.render("applicant/steps/step1")
})
router.get('/step2', (req, res) => {
    res.render("applicant/steps/step2")
})
router.get('/step3', (req, res) => {
    res.render("applicant/steps/step3")
})

module.exports = router