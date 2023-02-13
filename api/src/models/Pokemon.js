const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALZAMcm83-Bnh0bpq3uQK7RuqpmpZ3G96HiSsZA8&s"
    },
  });
};
