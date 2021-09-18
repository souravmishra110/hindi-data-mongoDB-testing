import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true }
})

const User = mongoose.model("User", UserSchema)

export default User;