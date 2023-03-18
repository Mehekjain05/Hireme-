const mongoose = require("mongoose");
const applSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    mobile: { type: Number, required: true },
})
const Appl = new mongoose.model("Admin", applSchema)
module.exports = Appl;