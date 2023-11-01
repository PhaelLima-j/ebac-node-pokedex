require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { connect, Pokemon, Usuario } = require('./models');

const populaBancoDeDados = async () => {
    connect();

    await Pokemon.create({
        id: 25,
        nome: 'pikachu',
        altura: 40,
        peso: 6,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        ataques: 'static, lightning-rod',
        estatisticas: {
            hp: 35,
            attack: 55,
            defense: 40,
            'special-attack': 50,
            'special-defense': 50,
            speed: 90
        },
        jogos: {
            red: 25,
            blue: 25,
            yellow: 25,
            gold: 25,
            silver: 25,
            crystal: 25,
            ruby: 25,
            sapphire: 25,
            emerald: 25,
            firered: 25,
            leafgreen: 25,
            diamond: 25,
            pearl: 25,
            platinum: 25,
            heartgold: 25,
            soulsilver: 25,
            black: 25,
            white: 25,
            'black-2': 25,
            'white-2': 25
        },
    });

    await Pokemon.create({
        id: 448,
        nome: 'lucario',
        altura: 12,
        peso: 540,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/offical-artwork/448.png',
        ataques: 'steadfast, inner-focus, justified',
        estatisticas: {
            hp: 70,
            attack: 110,
            defense: 70,
            'special-attack': 115,
            'special-defense': 70,
            speed: 90
        },
        jogos: {
            diamond: 448,
            pearl: 448,
            platinum: 448,
            heartgold: 448,
            soulsilver: 448,
            black: 448,
            white: 448,
            'black-2': 448,
            'white-2': 448
        },
    });

    await Pokemon.create({
        id: 587,
        nome: 'emolga',
        altura: 40,
        peso: 5,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png',
        ataques: 'static, motor-drive',
        estatisticas: {
            hp: 55,
            attack: 75,
            defense: 60,
            'special-attack': 75,
            'special-defense': 60,
            speed: 103
        },
        jogos: {
            black: 587,
            white: 587,
            'black-2': 587,
            'white-2': 587
        },
    });

    await Pokemon.create({
        id: 155,
        nome: 'cyndaquil',
        altura: 50,
        peso: 7.9,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png',
        ataques: 'blaze, flash-fire',
        estatisticas: {
            hp: 39,
            attack: 52,
            defense: 43,
            'special-attack': 60,
            'special-defense': 50,
            speed: 65
        },
        jogos: {
            gold: 155,
            silver: 155,
            crystal: 155,
            ruby: 155,
            sapphire: 155,
            emerald: 155,
            firered: 155,
            leafgreen: 155,
            diamond: 155,
            pearl: 155,
            platinum: 155,
            heartgold: 155,
            soulsilver: 155,
            black: 155,
            white: 155,
            'black-2': 155,
            'white-2': 155
        },
    });

    await Pokemon.create({
        id: 496,
        nome: 'servine',
        altura: 80,
        peso: 16,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png',
        ataques: 'overgrow, contrary',
        estatisticas: {
            hp: 60,
            attack: 60,
            defense: 75,
            'special-attack': 75,
            'special-defense': 60,
            speed: 83
        },
        jogos: {
            black: 496,
            white: 496,
            'black-2': 496,
            'white-2': 496
        },
    });

    await Pokemon.create({
        id: 600,
        nome: 'klang',
        altura: 60,
        peso: 51,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png',
        ataques: 'plus, minus, clear-body',
        estatisticas: {
            hp: 60,
            attack: 80,
            defense: 95,
            'special-attack': 70,
            'special-defense': 85,
            speed: 50
        },
        jogos: {
            black: 600,
            white: 600,
            'black-2': 600,
            'white-2': 600
        },
    });

    await Pokemon.create({
        id: 562,
        nome: 'yamask',
        altura: 50,
        peso: 1.5,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png',
        ataques: 'mummy',
        estatisticas: {
            hp: 38,
            attack: 30,
            defense: 85,
            'special-attack': 55,
            'special-defense': 65,
            speed: 30
        },
        jogos: {
            black: 562,
            white: 562,
            'black-2': 562,
            'white-2': 562
        },
    });

    await Pokemon.create({
        id: 504,
        nome: 'patrat',
        altura: 50,
        peso: 11.6,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png',
        ataques: 'run-away, keen-eye, analytic',
        estatisticas: {
            hp: 45,
            attack: 55,
            defense: 39,
            'special-attack': 35,
            'special-defense': 39,
            speed: 42
        },
        jogos: {
            black: 504,
            white: 504,
            'black-2': 504,
            'white-2': 504
        },
    });

    await Pokemon.create({
        id: 494,
        nome: 'victni',
        altura: 40,
        peso: 4,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png',
        ataques: 'victory-star',
        estatisticas: {
            hp: 100,
            attack: 100,
            defense: 100,
            'special-attack': 100,
            'special-defense': 100,
            speed: 100
        },
        jogos: {
            black: 494,
            white: 494,
            'black-2': 494,
            'white-2': 494
        },
    });

    await Pokemon.create({
        id: 502,
        nome: 'dewott',
        altura: 80,
        peso: 24.5,
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png',
        ataques: 'torrent, shell-armor',
        estatisticas: {
            hp: 75,
            attack: 75,
            defense: 60,
            'special-attack': 83,
            'special-defense': 60,
            speed: 60
        },
        jogos: {
            black: 502,
            white: 502,
            'black-2': 502,
            'white-2': 502
        },
    });

    await Usuario.create({
        email: 'raphael@teste.com.br',
        nome: 'Raphael Teste',
        senha: await bcrypt.hash('app@1234', 10),
    });

    await mongoose.disconnect();
};

populaBancoDeDados();