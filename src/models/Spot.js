const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    //id do usuario
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
    virtuals: true,
    },
});
SpotSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})
//criando o model Spot
module.exports = mongoose.model('Spot', SpotSchema);