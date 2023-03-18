const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const Recruiter = require("../../models/Recruiter/Recruiter")


router.get('/login', async(req, res) => {
    // const user = new Recruiter({
    //     _id: new mongoose.Types.ObjectId(),
    //     email: "mehekjain28@gmail.com",
    //     name: "Mehek jain",
    //     post: "Senior Manager",
    //     company_name: "Job Mile",
    //     mobile: 8898413414,
    //     pass: "Mehek@jain"
    // })
    // await user.save()
    // res.send("Inserted")
    res.render("Recruiter/Login")
})
router.post('/login', async (req, res) => {
    var user = await Recruiter.find({ username: req.body.username})
    if (user.length < 1) {
        res.send({
            message: "User Not found",
        });
    } else {
            if (req.body.pass == user[0].pass) {
                req.session.name = user[0].name;
                req.session.email = user[0].email;
                req.session.admin_id = user[0]._id;
                res.send('DASHBOARD!!!');
            } else {
                res.send({
                    message: "Wrong Password",
                });
            }
    }
})


module.exports = router