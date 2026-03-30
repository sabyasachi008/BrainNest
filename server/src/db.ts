 import mongoose from 'mongoose';
 

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type:String
    }
})


export const UserModel = new mongoose.Model(UserSchema, "User");

