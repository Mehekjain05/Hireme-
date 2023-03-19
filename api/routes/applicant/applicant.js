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
<<<<<<< HEAD
    else{
        res.render("Recruiter/Registration/step1")
=======
    else {
        res.send("Resgister Recruiter!!!")
>>>>>>> 891d62ba07ef2e9c9f3fdaaffd0fc73d41086515
    }
})


router.post('/step1', async (req, res) => {
    console.log("ye run kyu nhi ho raha")
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
    const pythonProcess = spawn('python', ['Py/SkillSet.py']);
    pythonProcess.stdout.on('data', (data) => {
        // data.forEach(element => {
        //     console.log(element)
        // });
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