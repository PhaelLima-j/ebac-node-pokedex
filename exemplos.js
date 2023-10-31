const jwt = require('jsonwebtoken');

const primeirojwt = jwt.sign(
    {
        nome: "Raphael",
        sobrenome: "Costella",
        exp: Math.floor(Date.now() / 1000) + 2, // 2 segundos
    },
    "chave-super-secreta"
);

// console.log(jwt.verify(primeirojwt, "chave-super-secreta"));

setTimeout(() => {
    console.log('JWT ainda e valido?', jwt.verify(primeirojwt, 'chave-super-secreta'));
}, 5000);