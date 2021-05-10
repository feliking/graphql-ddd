'use strict';

const { getQuery } = require('../../lib/util');
const Repository = require('../Repository');

module.exports = function tareasRepository (models, Sequelize) {
  const { tareas } = models;
  const Op = Sequelize.Op;

  function findAll (params = {}) {
    let query = getQuery(params);
    query.where = {};

    if (params.nombre) {
      query.where.nombre = {
        [Op.iLike]: `%${params.nombre}%`
      };
    }

    if (params.realizado) {
      query.where.realizado = {
        [Op.iLike]: `%${params.realizado}%`
      };
    }

    if (params.id_tarea) {
      query.where.id = params.id_tarea;
    }

    return tareas.findAndCountAll(query);
  }

  return {
    findAll,
    findById: (id) => Repository.findById(id, tareas),
    createOrUpdate: (item, t) => Repository.createOrUpdate(item, tareas, t),
    deleteItem: (id, t) => Repository.deleteItem(id, tareas, t)
  };
};
