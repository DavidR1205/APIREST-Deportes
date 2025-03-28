const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const registration = sequelize.define('Registration', {
    idRegistration: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }

    
})