// Importar dependencias
const db = require("../models");
const Administrador = db.administrador;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req.body)
    if (!req.body.permisos) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    Administrador.create({
        permisos: req.body.permisos,
  
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Error al crear una categoria"
        });
    });
};

exports.findAll = (req, res) => {
    Sale.findAll({ where: {} })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error en la búsqueda"
            });
        });
};
// Buscar una categoria por su id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Sale.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la categoria.`
                });
             }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};
// actualizar una categoria por su id
exports.update = (req, res) => {
    const id = req.params.id;
    Sale.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria actualzada."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la categoria`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });
};
// Eliminar un cliente
exports.delete = (req, res) => {
    const id = req.params.id;
    Sale.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Categoria eliminada"
                });
            } else {
                res.send({
                    message: `Categoria no encontrada`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la categoria"
            });
        });
};
// eliminar a todos los clientes
exports.deleteAll = (req, res) => {
    Sale.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Categorias eliminadas!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error al eliminar todas las categorias."
            });
        });
};
