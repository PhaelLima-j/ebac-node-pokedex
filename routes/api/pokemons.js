const express = require('express');

const { Pokemon } = require('../../models');
const router = express.Router();

// C de Create
router.post('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.create({
            ...req.body,
            ...{
                capturadoPor: req.usuario._id
            }
        });
        res.status(201).json({
            sucesso: true,
            pokemon: pokemon,
        });

    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        });
    }
});

// R de Read
router.get('/', async (req, res) => {
    try {
        const filtros = req.query;
        const options = {};

        if (filtros.nomeComecaCom) {
            options.nome = {
                $regex: filtros.nomeComecaCom + '.*',
            }
        }
        if (filtros.pesoMinimo) {
            options.peso = {
                $gt: filtros.pesoMinimo,
            }
        }
        if (filtros.alturaMinima) {
            options.altura = {
                $gt: filtros.alturaMinima,
            }
        }

        options.capturadoPor = req.usuario._id;
        
        const pokemons = await Pokemon.find(options);
        res.status(200).json({
            sucesso: true,
            pokemons: pokemons,
        })
    } catch (e) {
        res.status(500).json({
            sucesso: false,
            erro: e,
        })
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({
            _id: req.params.id,
            capturadoPor: req.usuario._id,
         });
        res.json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch {
        res.status(404).json({
            sucesso: false,
            erro: 'Pokemon nao encontrado',
        })
    }
});

//U de Update (put envia um json com a estrutura toda do pokemon e o patch e so oq quer)
router.patch('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ 
            id: req.params.id,
            capturadoPor: req.usuario._id,
        });

        Object.keys(req.body).forEach((atributo) => {
            pokemon[atributo] = req.body[atributo];
        });

        await pokemon.save();

        res.json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch {
        res.status(422).json({
            sucesso: false,
            erro: e,
        })
    }
});

//D Delete
router.delete('/:id', async (req, res) => {
    try {
        const pokemon = await Pokemon.deleteOne({ _id: req.params.id });
        res.json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        })
    }
});
module.exports = router;