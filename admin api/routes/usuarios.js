var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Usuario = require('../models').usuario;
const Perfil = require('../models').perfil;

router.get('/json',
    function (req, res, next) {
        Usuario.findAll({
            attributes: { exclude: ["updatedAt"] },
            include: [
                {
                    model: Perfil,
                    attributes: ['descripcion', 'estado'],
                    through: { attributes: [] }
                }]
        })
            .then(usuarios => {
                res.json(usuarios);
            })
            .catch(error =>
                res.status(400).send(error))
    });


// view para /json
router.get('/view', function (req, res, next) {
    Usuario.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [
            {
                model: Perfil,
                attributes: ['descripcion', 'estado'],
                through: { attributes: [] }
            }]
    })
    .then(usuarios => {
        res.render('usuarios', { usuarios });
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;