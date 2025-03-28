const { body, validationResult } = require('express-validator');

const validRegistration = [

    body('idAthlete')
        .isInt()
        .withMessage('El idAtleta debe ser un número entero'),

    body('idEvent')
        .isInt()
        .withMessage('El idEvento debe ser un número entero'),


    body('registrationDate')
    .isDate()
    .withMessage('La fecha de registro debe ser una fecha válida'),

    
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }

];

module.exports = validRegistration;