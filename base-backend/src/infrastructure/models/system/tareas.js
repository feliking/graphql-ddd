'use strict';

const lang = require('../../lang');
const util = require('../../lib/util');

module.exports = (sequelize, DataTypes) => {
  let fields = {
    id: util.pk,
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      xlabel: lang.t('fields.nombre')
    },
    realizado: {
      type: DataTypes.TEXT,
      allowNull: false,
      xlabel: lang.t('fields.realizado')
    }
  };

  // Agregando campos para el log
  fields = util.setTimestamps(fields);

  let Tareas = sequelize.define('tareas', fields, {
    timestamps: false,
    tableName: 'tareas'
  });

  return Tareas;
};
