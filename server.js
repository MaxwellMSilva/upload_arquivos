const express = require('express');
const multer = require('multer');
const path = require('path')

const app = express();

const storage = multer.diskStorage({
    destination: function(request, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(request, file, cb) {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
});

app.post('/upload', upload.single('file'), (request, response) => {
    response.send('Enviado')
});

app.listen(3333);
