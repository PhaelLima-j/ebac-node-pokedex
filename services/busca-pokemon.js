const axios = require('axios');

const { Pokemon } = require("../models");

const buscaInfoPokemon = (pokeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const url = "https://pokeapi.co/api/v2/pokemon/" + pokeId;
            const resultado = await axios.get(url);
            const data = resultado.data;

            const id = data.id;
            const nome = data.name;
            const altura = data.height;
            const peso = data.weight;
            const imagem = data.sprites.other['official-artwork'].front_default;
            const ataques = data.abilities.map(a => a.ability.name).join(', ');

            const estatisticas = {};

            data.stats.forEach((estatistica) => {
                estatisticas[estatistica.stat.name] = estatistica.base_stat;
            });

            resolve({
                id,
                nome,
                altura,
                peso,
                imagem,
                ataques,
                estatisticas,
            })

        } catch (e) {
            reject(e)
        };
    }
    )
};

module.exports = buscaInfoPokemon;
