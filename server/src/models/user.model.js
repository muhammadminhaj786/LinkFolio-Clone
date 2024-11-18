import mongoose from 'mongoose'
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required :true
    },
    phoneNo: {
        type: String,
        required: true
    },
    password :{
        type: String,
        required: true
    }
},{timestamps: true})

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

export const User = mongoose.model('users', userSchema);