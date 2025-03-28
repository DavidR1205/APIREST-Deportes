const Registration = sequelize.define('Registration', {
    idRegistration: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idAthlete: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Athlete,
            key: 'idAthlete'
        },
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT"
    },
    idEvent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Event,
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
    tableName: "Registrations",
    timestamps: false
});

Registration.belongsTo(Athlete, { foreignKey: 'idAthlete' });
Registration.belongsTo(Event, { foreignKey: 'idEvent' });

module.exports = Registration;
