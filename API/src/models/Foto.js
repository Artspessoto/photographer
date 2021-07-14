const mongoose = require('mongoose');

const PhotoSchema = new mongosse.Schema({
    titulo: String,
    descricao: String,
    urlFoto: String,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuarios',
    },
    categoria: String,
    created_at: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('photos', PhotoSchema);