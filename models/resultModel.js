const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const registration = require('./registrationModel');

const result = sequelize.define('Result', {
    idResult: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    score: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    ranking: {
        type: DataTypes.STRING,
        allowNull: false,

    },

    statistic:{
        type: DataTypes.STRING,
        allowNull: false,

    },

    idRegistration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'registrations',
            key: 'idRegistration'
        },
        onDelete: "RESTRICT",
        onDelete: "RESTRICT"
    }
    
});

registration.hasMany(registration, {
    foreignKey: 'idRegistration',
})

result.belongsTo(registration, {
    foreignKey: 'idRegistration'
})

module.exports = result;