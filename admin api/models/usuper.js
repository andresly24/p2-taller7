'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuper extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuper.init({
    id_usuario: DataTypes.INTEGER,
    id_perfil: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuper',
    tableName: 'usupers'
  });
  return usuper;
};