const express = require('express');
const Result = require('../models/resultModel');
const resultValidator = require('../middlewares/resultValidator');

const router = express.Router();


router.post('/result', resultValidator, async (req, res) => {
    try {
        const { score, ranking, statistic } = req.body;
        const newResult = await Result.create({ score, ranking, statistic });
        res.status(201).json({ message: 'Resultado creado', newResult });

    } catch (error) {
        console.error('Error al crear el resultado: ', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.get('/result', async (req, res) => {
    try {
        const result = await Result.findAll();
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los resultados' });

    }
});

router.delete('/result/:id', async (req, res) => {
    try {
        const resultId = req.params.id
        const result = await Result.findByPk(resultId);
        if (!result) {
            res.status(404).json({ error: 'ID de resultado no econtrado' });
        }
        else {
            await result.destroy();
            res.status(200).json({ message: 'Resultado eliminado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrio un error al eliminar el resultado' })

    }
});

router.put('/result/:id', async (req, res) => {
    try {
        const resultId = req.params.id;
        const result = await Result.findByPk(resultId);

        if (!result) {
            return res.status(404).json({ error: 'ID del resultado no encontrado' });
        }

        const { score, ranking, statistic } = req.body;

        result.score = score || result.score;
        result.ranking = ranking || result.ranking;
        result.statistic = statistic || result.statistic;

        await result.save();

        res.status(200).json({ message: 'Resultado actualizado correctamente', result });
    } catch (error) {
        console.error('Error al actualizar resultado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;