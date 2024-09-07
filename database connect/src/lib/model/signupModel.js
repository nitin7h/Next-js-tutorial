import mongoose from "mongoose";

const dbSchema = mongoose.Schema({
    fullName: String,
    email: String,
    password: String
})

const User = mongoose.models.users || mongoose.model("users", dbSchema)

export default User