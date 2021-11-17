const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: String,
    age: Number,
    city: String,
    profession: String,
    selected: String,
    completes: Boolean,
});
const User = mongoose.model("User", UserSchema);
module.exports = User;