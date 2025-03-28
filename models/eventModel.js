const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
//const athlete = require('./athleteModels');

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

    eventName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    modality: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    typeSport: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
},{
    tableName: "events",
    timestamps: false,
});

module.exports = event;
/*event.hasMany(athlete, {
    foreignKey: 'idAthlete',
});
athlete.belongsTo(event);*/