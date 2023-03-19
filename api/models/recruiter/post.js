const mongoose = require("mongoose");
const recSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    post: { type: String, required: true },
    minsal: { type: String, required: true },
    maxsal: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    skills: { type: String, required: true },

})
const recr = new mongoose.model("Recruiter", recSchema)
module.exports = recr;