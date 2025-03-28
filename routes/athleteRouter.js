const express = require('express');
const Athlete = require('../models/athleteModels');
const athleteValidator = require('../middlewares/athleteValidator');

const router = express.Router();


router.post('/athlete', athleteValidator, async (req, res) => {
    try {
        const { firtsName, lastName, age, weight, height } = req.body;
        const newAthlete = await Athlete.create({ firtsName, lastName, age, weight, height });
        res.status(201).json({ message: 'Usuario creado', newAthlete });

    } catch (error) {
        console.error('Error al crear el atleta: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get('/athlete', async (req, res) => {
    try {
        const users = await Athlete.findAll();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los atletas' });

    }
});

router.delete('/athlete/:id', async (req, res) => {
    try {
        const athleteid = req.params.id
        const athlete = await Athlete.findByPk(athleteid);
        if (!athlete) {
            res.status(404).json({ error: 'ID de atleta no econtrado' });
        }
        else {
            await athlete.destroy();
            res.status(200).json({ message: 'Atleta eliminado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al eliminar el atleta' })

    }
});

router.put('/athlete/:id', async (req, res) => {
    try {
        const athleteId = req.params.id;
        const athlete = await Athlete.findByPk(athleteId);

        if (!athlete) {
            return res.status(404).json({ error: 'ID de atleta no encontrado' });
        }

        const { firtsName, lastName, age, weight, height } = req.body;

        athlete.firtsName = firtsName || athlete.firtsName;
        athlete.lastName = lastName || athlete.lastName;
        athlete.age = age || athlete.age;
        athlete.weight = weight || athlete.weight;
        athlete.height = height || athlete.height;

        await athlete.save();

        res.status(200).json({ message: 'Atleta actualizado correctamente', athlete });
    } catch (error) {
        console.error('Error al actualizar atleta:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});