const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const result = sequelize.define('Registration', {
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

    }
    
})

module.exports = result;