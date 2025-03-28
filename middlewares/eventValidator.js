const { body, validationResult } = require('express-validator');

const validEvent = [
    body('dateEvent')
        .isDate()
        .withMessage('Solo se permiten datos tipo fecha'),

    body('placeEvent')
        .isString()
        .withMessage('Solo se permite caracteres'),

    body('eventName')
        .isString()
        .withMessage('Solo se permite caracteres'),

    body('modality')
        .isString()
        .withMessage('Solo se permite caracteres'),
    
    body('typeSport')
        .isString()
        .withMessage('Solo se permite caracteres'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array()})
        }
        next();
    }
];

module.exports = validEvent;