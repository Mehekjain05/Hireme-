const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    post: { type: String, required: true },
    minsal: { type: String, required: true },
    maxsal: { type: String, required: true },
    experience: { type: Number, required: true },
    location: { type: String, required: true },
    skills: [{type: mongoose.Schema.Types.ObjectId}],

})
const post = new mongoose.model("post", postSchema)
module.exports = post;