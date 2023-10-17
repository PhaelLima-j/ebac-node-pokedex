const express = require('express');
const path = require('path');

const expressLayouts = require('express-ejs-layouts');
const { connect } = require('./models');

const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const capturaRouter = require('./routes/api/captura');

const app = express();

// configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//configurando arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons', pokemonsRouter);
app.use('/batalha', batalhaRouter);

// declarando rotas de api
app.use('/api', capturaRouter);

// caso nao de match em nenhuma, tratamos o 404
app.use((_req, _res, next) => {
    next(createError(404));
});

// tratativa de error
app.use((err, _req,res, _next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro: err,
    });
});

const porta = 3005;
app.listen(porta, () => {
    connect();

    console.log("Servidor ouvindo na porta " + porta)
});