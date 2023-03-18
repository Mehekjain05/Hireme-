const mongoose = require("mongoose");
const applSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    Resumepdf: { type: String, required: false },
    mobile: { type: Number, required: true },
})
const Appl = new mongoose.model("Applicant", applSchema)
module.exports = Appl;