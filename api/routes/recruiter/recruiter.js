const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Appl = require("../../models/applicant/applicant")
const Recruiter = require("../../models/Recruiter/Recruiter")


router.get('/login', async(req, res) => {
    // const user = new Recruiter({
    //     _id: new mongoose.Types.ObjectId(),
    //     email: req.body.email,
    //     username: req.body.username,
    //     post: req.body.post,
    //     company_name: req.body.company_name,
    //     mobile: req.body.mob,
    //     pass: req.body.pass
    // })
    // await user.save()
    
    res.render("Recruiter/Login")
})

router.post('/login', async (req, res) => {
    console.log(req.body.toggle)
    
    if(req.body.toggle == 'on'){
        var user = await Appl.find({ username: req.body.username})
        if (user.length < 1) {
            res.send({
                message: "User Not found",
            });
        } else {
                if (req.body.pass == user[0].pass) {
                    req.session.name = user[0].name;
                    req.session.email = user[0].email;
                    req.session.appl_id = user[0]._id;
                    res.send("dashboard!!!");
                } else {
                    res.send({
                        message: "Wrong Password",
                    });
                }
        }
    }
    else{
        var user = await Recruiter.find({ username: req.body.username})
        if (user.length < 1) {
            res.send({
                message: "User Not found please check your user type!!",
            });
        } else {
                if (req.body.pass == user[0].pass) {
                    req.session.name = user[0].name;
                    req.session.email = user[0].email;
                    req.session.rec_id = user[0]._id;
                    res.redirect('dashboard');
                } else {
                    res.send({
                        message: "Wrong Password",
                    });
                }
        }
    }
    
})

router.get('/logout', (req, res) => {
    res.redirect("Recruiter/login")})

router.get('/dashboard', (req, res) => {
    res.render("Recruiter/Dasboard")})

module.exports = router