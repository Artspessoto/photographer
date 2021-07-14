const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();
const upload = multer(uploadConfig);

const UsuarioController = require('./controllers/UsuarioController');
/* aspas simples porque toda rota é uma string*/
/* response é enviar uma resposta e request é uma requisição*/
routes.post('/cadastro', upload.single('usuFoto'), UsuarioController.cadastraUsuarios);

module.exports = routes; /* exportar o routes para usar no index.js*/


/*
routes.get('/', (request, response) => {
    return response.json({ name: "Pedro", age: 18 });
});

routes.post('/cadastro', (request, response) => {
      const { name, age } = request.body;

        const user = {
            name,
            age
        }

        return response.json(user);
});
*/
