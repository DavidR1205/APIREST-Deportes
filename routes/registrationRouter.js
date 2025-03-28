const express = require('express');
const Registration = require('../models/registrationModel');
const registrationValidator = require('../middlewares/registrationValidator');

const router = express.Router();


router.post('/registration', registrationValidator, async (req, res) => {
    try {
        const { firtsName, lastName, age, weight, height } = req.body;
        const newRegistration = await Registration.create({ idRegistration, idAthlete, idEvent, registrationDate });
        res.status(201).json({ message: 'Registro creado', newRegistration });

    } catch (error) {
        console.error('Error al crear el registro: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get('/registration', async (req, res) => {
    try {
        const registration = await Registration.findAll();
        res.status(200).json(registration);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros' });

    }
});

router.delete('/registration/:id', async (req, res) => {
    try {
        const registrationid = req.params.id
        const registration = await Athlete.findByPk(registrationid);
        if (!registration) {
            res.status(404).json({ error: 'ID del registro no econtrado' });
        }
        else {
            await registration.destroy();
            res.status(200).json({ message: 'Registro eliminado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al eliminar el atleta' })

    }
});

router.put('/registration/:id', async (req, res) => {
    try {
        const registrationId = req.params.id;
        const registration = await Registration.findByPk(registrationId);

        if (!registration) {
            return res.status(404).json({ error: 'ID del registro no encontrado' });
        }

        const { idRegistration, idAthlete, idEvent, registrationDate } = req.body;

        registration.idRegistration = idRegistration || registration.idRegistration;
        registration.idAthlete = idAthlete || registration.idAthlete;
        registration.idEvent = idEvent || registration.idEvent;
        registration.registrationDate = registrationDate || registration.registrationDate;


        await registration.save();

        res.status(200).json({ message: 'Registtro actualizado correctamente', registration });
    } catch (error) {
        console.error('Error al actualizar registrp:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;