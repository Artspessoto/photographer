const express = require('express');
/*mongoose vai ser utilizado para fazer a conexão com o banco de dados. */
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
require('dotenv').config();

/* express serve para gente fazer requisições http(get = pegar dados, consultar, post = inserir, put = alterar,
   delete, request = para fazer requisições, response = para enviar respostas )*/
/*const = constante, valor sem alteração*/ 

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.user_name}:${process.env.user_pass}@cluster0.xo7s2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then( ()=> {
    return console.log("Conectado com sucesso ao mongo!");
}).catch( (error) => {
    return console.log(`Ocorreu algum erro ${error}`);
})

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    return console.log("O servidor está funcionando");
});


