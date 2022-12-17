const exam = require('exam');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 15
    },
    phonenumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    age : {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 3
    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    }
}));

function validateUser(user) {
    const schema = {
        name: exam.string().min(3).max(50).required(),
        email: exam.string().min(5).max(255).required().email(),
        password: exam.string().min(8).max(15).required(),
        phonenumber:exam.string().min(10).max(10).required(),
        age: exam.string().min(1).max(3).required(),
        address: exam.string().min(5).max(255).required(),
    };
    return exam.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;