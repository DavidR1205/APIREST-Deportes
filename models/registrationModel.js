const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const registration = sequelize.define('Registration', {
    idRegistration: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    idAthlete: {
        type: DataTypes.INTEGER,
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },

    idEvent: {
        type: DataTypes.INTEGER,
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },

    registrationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },


})
module.exports = registration;