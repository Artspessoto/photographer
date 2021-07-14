const multer = require('multer');//multer serve para upload de arquivos
const path = require('path');

module.exports= {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", 'uploads'),
        filename: (req, file, cb) => {
            const extensao = path.extname(file.originalname);
            const nome = path.basename(file.originalname, extensao);

            cb(null, `${nome}-${Date.now()} ${extensao}`); //função de call back, função de resposta
        },
        size: 10 * 1048576,
    }),
}