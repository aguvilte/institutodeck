var express = require('express');
var app = express();
    ejs = require('ejs').renderFile;
    path = require('path');

app.use(express.static(path.join(__dirname, 'public/img')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs);

app.get('/', (req, res) => {
  res.render('index.html');
})

app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000');
})
