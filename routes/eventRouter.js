const express = require('express');
const Event = require('../models/eventModel');
const eventValidator = require('../middlewares/eventValidator');

const router = express.Router();

router.post('/events', eventValidator, async(req, res)=>{
    try {
        const { dateEvent, placeEvent, eventName, modality, typeSport} = req.body;
        const newEvent = await Event.create({dateEvent, placeEvent, eventName, modality, typeSport});
        res.status(201).json({messagge: "Evento Creado", newEvent});
    } catch (error) {
        console.error('Error al crear el Evento:', error);
        res.status(500).json({error: "Error interno del servidor"});
    }
});

router.get('/events', async(req,res)=>{
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los eventos'});
    }
});

router.delete('events/:id', async(req, res)=>{
    try {
        const EventId = req.params.id;
        const event = await Event.findByPk(EventId);
        if (!event) {
            res.status(404).json({error: 'Id de Evento no encontrado'});
        }
        else {
            await event.destroy();
            res.status(200).json({messagge: 'Evento eliminado con Exito'});
        }
    } catch (error) {
        res.status(500).json({error: 'Ocurrio un error al eliminar el evento'});
    }
});

router.put('/event/:id', async (req, res) => {
    try {
        const EventId = req.params.id;
        const event = await Event.findByPk(EventId);

        if (!event) {
            return res.status(404).json({ error: 'ID de evento no encontrado' });
        }

        const { dateEvent, placeEvent, eventName, modality, typeSport} = req.body;

        event.dateEvent = dateEvent || event.dateEvent;
        event.placeEvent = placeEvent || event.placeEvent;
        event.eventName = eventName || event.eventName;
        event.modality = modality || event.modality;
        event.typeSport = typeSport ||  event.typeSport;

        await event.save();

        res.status(200).json({ message: 'Evento actualizado correctamente', event });
    } catch (error) {
        console.error('Error al actualizar Evento:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = router;