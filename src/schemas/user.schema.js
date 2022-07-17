import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        minLenght: 2,
        maxLenght: 20,
    },
    surname: {
        type: String,
        require: true,
        minLenght: 4,
        maxLenght: 50,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
});

const userModel = model('User', userSchema);

export default userModel;
