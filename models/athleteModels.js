const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const athlete = sequelize.define('Athlete', {

    //id, nombre, apellido, edad, altura, peso, deporte
    idAthlete: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    firtsName: {
        type: DataTypes.STRING,
        allowNull: false

    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false

    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    height: {
        type: DataTypes.FLOAT,
        allowNull: false
    }

},
 {
    tableName: 'Athletes',
    timestamps: false


})

Athlete.hasMany(require('./registration'), { foreignKey: 'idAthlete' });

module.exports = athlete;