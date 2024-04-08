import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    }, 
    DOB: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
}, {timestamps: true})

export const User = model('User', userSchema);
