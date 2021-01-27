const express = require('express')

const router = express.Router()

const pokemon = require('../models/pokemon')

router.put('/:index', (req, res) => {
    pokemon[req.params.index] = req.body
    res.json({
        route: 'put route',
        pokemon: pokemon[req.params.index]
    })
})

router.delete('/:index', (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.json({
        route: 'delete route',
        id: req.params.index
    })
})

router.post('/', (req, res) => {
    pokemon.push(req.body)
    res.json({
        route: 'post route',
        pokemon: pokemon
    })
})

router.get('/', (req, res) => {
    res.json({
        pokemon: pokemon
    })
})

router.get('/:index', (req, res) => {
    res.json({
        poke: pokemon[req.params.index]
    })
})

module.exports = router