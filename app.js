require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const createError = require('http-errors');

const expressLayouts = require('express-ejs-layouts');
const { connect } = require('./models');

require('./routes/auth/');
const pokemonsRouter = require('./routes/pokemons');
const batalhaRouter = require('./routes/batalha');
const apiRouter = require('./routes/api/');
const autenticacaoRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
const { checaAutenticado } = require('./routes/middlewares/checa-autenticacao');


const app = express();

// configurando leitura de corpo
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// configurando a autenticacao
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

// configurando ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

//configurando arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// declarando rotas
app.use('/pokemons', checaAutenticado, pokemonsRouter);
app.use('/batalha', checaAutenticado, batalhaRouter);
app.use('/auth', autenticacaoRouter);
app.use('/', checaAutenticado, homeRouter);

// declarando rotas de api
app.use('/api', apiRouter);

// caso nao de match em nenhuma, tratamos o 404
app.use((_req, _res, next) => {
    next(createError(404));
});

// tratativa de error
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro: err,
    });
});

const porta = 3002;
app.listen(porta, () => {
    connect();

    console.log("Servidor ouvindo na porta " + porta)
});