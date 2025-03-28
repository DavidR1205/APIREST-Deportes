const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const athlete = require('./athleteModels');

//fecha-lugar
const event = sequelize.define('Event', {
    idEvent: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    dateEvent: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    placeEvent: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    idAthlete: {
        type: DataTypes.INTEGER,
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
    },
    
})
event.hasMany(athlete, {
    foreignKey: 'idAthlete',
});
athlete.belongsTo(event);