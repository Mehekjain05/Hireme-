const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Applicant = require("../../models/applicant/applicant")
const fs = require("fs");
const path = require('path');

const { spawn } = require('child_process');


router.get('/login', (req, res) => {
    res.render("applicant/login")
})

router.get('/step1/(:type)', (req, res) => {
    if (req.params.type == 'user') {
        res.render("applicant/steps/step1")
    }
    else{
        res.render("Recruiter/Registration/step1")
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
    res.redirect("/applicant/step3");
});

router.get('/step3', (req, res) => {
    const pythonProcess = spawn('python', ['Py/SkillSet.py']);
    pythonProcess.stdout.on('data', (data) => {
        const myArray = data.toString().split(" ");
        console.log(myArray)
        res.render("applicant/steps/step3",{data: myArray})
        console.log(`Python script output: ${data}`);
    });
    

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error in Python script: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python script exited with code ${code}`);
    });
    
})

module.exports = router