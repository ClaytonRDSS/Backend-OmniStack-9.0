const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
});

//criando o model User
module.exports = mongoose.model('User', UserSchema);

