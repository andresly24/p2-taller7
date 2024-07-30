'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // model belong to many usuper 
      models.perfil.belongsToMany(models.usuario, { through: 'usuper', foreignKey:'id_perfil' });
    }
  }
  perfil.init({
    descripcion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perfil',
    tableName: 'perfils'
  });
  return perfil;
};