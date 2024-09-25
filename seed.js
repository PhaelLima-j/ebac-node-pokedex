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
        jogos: [
            'red',
            'blue',
            'yellow',
            'gold',
            'silver',
            'crystal',
            'ruby',
            'sapphire',
            'emerald',
            'firered',
            'leafgreen',
            'diamond',
            'pearl',
            'platinum',
            'heartgold',
            'soulsilver',
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'diamond',
            'pearl',
            'platinum',
            'heartgold',
            'soulsilver',
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'gold',
            'silver',
            'crystal',
            'ruby',
            'sapphire',
            'emerald',
            'firered',
            'leafgreen',
            'diamond',
            'pearl',
            'platinum',
            'heartgold',
            'soulsilver',
            'black',
            'white',
            'black-2',
            'white-2' 
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2'
        ],
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
        jogos: [
            'black',
            'white',
            'black-2',
            'white-2',
        ],
    });

    await Usuario.create({
        email: 'raphael@teste.com.br',
        nome: 'Raphael Teste',
        senha: await bcrypt.hash('app@1234', 10),
    });

    await mongoose.disconnect();
};

populaBancoDeDados();