const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//table  == schema == model

const UsuarioSchema = new mongoose.Schema({
    usuFoto: String, //é string pq só vai armazenar apenas o local do arquivo, n o arquivo em si
    nome: String,
    email: String,
    sobre: String,
    senha: String,
    created_at: {
        type: Date,
        default: Date.now,
    }
},
{
  toJSON: {
    virtuals: true,
  },
});

UsuarioSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha,10) ///encriptar a senha em decimal
    this.senha = hash;
    next();
});

UsuarioSchema.virtual('foto_usuario').get(function(){
    return `http://localhost:3333/files/${this.usuFoto}`
});

module.exports = mongoose.model('usuarios', UsuarioSchema);