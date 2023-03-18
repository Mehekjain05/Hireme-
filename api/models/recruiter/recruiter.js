const mongoose = require("mongoose");
const recSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    mobile: { type: Number, required: true },
    company_name: { type: String, required: true },
    post: { type: String, required: true },

})
const recr = new mongoose.model("Recruiter", recSchema)
module.exports = recr;