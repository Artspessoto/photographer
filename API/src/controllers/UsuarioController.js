const Usuario = require('../models/Usuario');

module.exports = {
    async cadastraUsuarios(request,  response, next){
        const { filename } = request.file;
        const { nome, email, sobre, senha } = request.body;

        try {
            //verifica se usuario já existe
            const verifyUsuario = await Usuario.findOne({email});

            if(verifyUsuario){
                return response.status(400).json({ mensagem: "Usuário já cadastrado!"});
            }
            //cria um usuario
            const usuario = await Usuario.create({
                usuFoto: filename,
                nome,
                email,
                sobre,
                senha
            });

            //usuario.senha = undefined;

            response.status(201).json({usuario});
        } catch (error) {
            console.log(error);
            return response.status(400).json({ erro: "Erro ao inserir o usuário!"});
        }
    }
    
}