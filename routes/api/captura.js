const express = require('express');

const buscaInfoPokemon = require('../../services/busca-pokemon');

const { Pokemon } = require('../../models');

const router = express.Router();

router.post('/:id', async (req, res) => {
    try {
        const pokemon = await buscaInfoPokemon(req.params.id);
        const pokemonFoiCapturado = Math.random() <= 0.9;

        if (pokemonFoiCapturado) {
            const pokemonCapturado = await Pokemon.create({
                ...pokemon,
                ...{
                    capturadoPor: req.usuario._id,
                }
            });
            res.json({
                capturado: true,
                id: pokemonCapturado._id
            });
        } else {
            res.json({ capturado: false });
        }
    } catch (e) {
        res.status(500).json({ erro: e });
    }
});

module.exports = router;
