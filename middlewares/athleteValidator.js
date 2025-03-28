const { body, validationResult } = require('express-validator');

const validAthlete = [
    body('firtsName')
        .isString()
        .withMessage('Solo se permiten caracteres')
        .isLength({ min: 3 })
        .withMessage('El nombre debe tener más de tres caracteres'),

    body('lastName')
        .isString()
        .withMessage('Solo se permiten caracteres')
        .isLength({ min: 3 })
        .withMessage('El apellido debe tener más de tres caracteres'),

    body('age')
        .isInt({ min: 18 }),



    body('weight')
        .isFloat({ min: 0 }),


    body('height')
        .isFloat({ min: 0 }),



    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }


]

module.exports = validAthlete;