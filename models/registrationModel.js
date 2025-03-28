const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const athlete = require('./athleteModels');
const event = require('./eventModel');

const registration = sequelize.define('Registration', {
    idRegistration: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idAthlete: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'athletes',
            key: 'idAthlete'
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },
    idEvent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'events',
            key: 'idEvent'
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },
    registrationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    tableName: "registrations",
    timestamps: false
});

athlete.hasMany(registration, {
    foreignKey: 'idAthlete'
});

event.hasMany(registration, {
    foreignKey: 'idEvent'
});

registration.belongsTo(athlete, {
    foreignKey: 'idAthlete'
});

registration.belongsTo(event, {
    foreignKey: 'idEvent'
});


module.exports = registration;
